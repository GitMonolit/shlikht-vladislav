'use strict';
// Content is authored locally. KaTeX and its fonts are served with the site.
function formulaMarkup(source, displayMode=false) {
  return katex.renderToString(source.replace(/\\frac/g,'\\dfrac'),{displayMode,throwOnError:true,trust:false,output:'htmlAndMathml'});
}
function legacyFormula(source) {
  return source.replaceAll('−','-').replaceAll('·','\\cdot ').replaceAll('±','\\pm ')
    .replace(/log([₀-₉]+)/g,(_,digits)=>'\\log_{'+Array.from(digits,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).join('')+'}')
    .replaceAll('sin','\\sin ').replaceAll('cos','\\cos ')
    .replaceAll('π','\\pi ').replaceAll('²','^2').replaceAll('³','^3')
    .replace(/([a-zA-Z])([₀-₉])/g,(_,name,digit)=>name+'_'+ '₀₁₂₃₄₅₆₇₈₉'.indexOf(digit))
    .replace(/√\(([^)]+)\)/g,'\\sqrt{$1}').replace(/√(\d+)/g,'\\sqrt{$1}')
    .replace(/([0-9]+(?:\\pi\s*)?|\\pi\s*)\/(\d+)/g,'\\frac{$1}{$2}')
    .replace(/(\d+),(\d+)/g,'$1{,}$2').replaceAll('°','^\\circ');
}
function formatMath(root) {
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) {
    const node=walker.currentNode;
    if(!node.parentElement.closest('.katex, script, style, code, pre')) nodes.push(node);
  }
  const explicit=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
  // Legacy cards used plain fractions and equations; convert only mathematical runs.
  const legacy=/(?:[A-Za-zπ√0-9][A-Za-zπ√0-9₀-₉²³′°.,;()\[\]+−=<>≤≥±·:\/−– -]*[A-Za-zπ0-9²³′°)\]])/g;
  for(const node of nodes) {
    const fragment=document.createDocumentFragment();
    const appendLegacy=text=>{
      let cursor=0;
      for(const match of text.matchAll(legacy)) {
        const candidate=match[0].trim();
        if(!(/[=<>≤≥]|\d\/\d|π\/\d|[²³√]/.test(candidate))) continue;
        fragment.append(document.createTextNode(text.slice(cursor,match.index)));
        const span=document.createElement('span');
        span.innerHTML=formulaMarkup(legacyFormula(candidate));
        fragment.append(span);
        cursor=match.index+match[0].length;
      }
      fragment.append(document.createTextNode(text.slice(cursor)));
    };
    let cursor=0;
    for(const match of node.nodeValue.matchAll(explicit)) {
      appendLegacy(node.nodeValue.slice(cursor,match.index));
      const span=document.createElement('span');
      span.className=match[2]!==undefined?'math-block':'math-inline';
      span.innerHTML=formulaMarkup(match[1]??match[2],match[2]!==undefined);
      fragment.append(span);
      cursor=match.index+match[0].length;
    }
    appendLegacy(node.nodeValue.slice(cursor));
    node.replaceWith(fragment);
  }
}
