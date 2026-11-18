'use strict';
const materials = [
  {type:'Презентации',grade:'5 класс',title:'Дроби с разными знаменателями',summary:'Пять слайдов с объяснением, примером и мини-проверкой.',slides:[
    ['Что означает знаменатель','Знаменатель показывает, на сколько равных частей разделили целое. Числитель показывает, сколько таких частей взяли.'],
    ['Равные дроби','Если умножить числитель и знаменатель на одно и то же ненулевое число, величина дроби не изменится. Например, 1/2 = 2/4 = 3/6.'],
    ['Складываем дроби','Для 1/3 и 1/4 общий знаменатель — 12. Получаем 4/12 + 3/12 = 7/12. Правило: привести дроби к общему знаменателю и сложить числители.'],
    ['Вычитаем дроби','5/6 − 1/4 = 10/12 − 3/12 = 7/12. Перед вычитанием запишите обе дроби с одним знаменателем.'],
    ['Проверьте себя','Найдите 2/3 + 1/6, 7/8 − 1/4 и 1/2 + 1/3. Ответы: 5/6; 5/8; 5/6.']
  ]},
  {type:'Презентации',grade:'7 класс',title:'Линейная функция',summary:'Как построить график и понять, что означают коэффициенты k и b.',slides:[
    ['Формула y = kx + b','Для каждого значения x формула задаёт одно значение y. График функции y = kx + b — прямая.'],
    ['Где прямая пересекает ось Oy','При x = 0 получаем y = b. У функции y = 2x − 1 точка пересечения с осью Oy имеет координаты (0; −1).'],
    ['Что показывает k','При увеличении x на 1 значение y изменяется на k. При k > 0 функция возрастает, при k < 0 убывает, при k = 0 постоянна.'],
    ['Строим график','Для y = 2x − 1 возьмём x = 0 и x = 2. Получим точки (0; −1) и (2; 3). Отметьте их на плоскости и проведите прямую.'],
    ['Самопроверка','Для y = −3x + 6 найдите y при x = 1 и пересечение с осью Ox. Ответы: y = 3; точка (2; 0).']
  ]},
  {type:'Рабочие программы',grade:'5 класс',title:'Числа и вычисления',summary:'Проект тематического модуля на 12 уроков с планируемыми результатами.',body:`
    <p><strong>Проект раздела рабочей программы.</strong> 12 уроков. План можно адаптировать к календарю и программе школы.</p>
    <h3>Планируемые результаты</h3><p>Ученик читает и сравнивает натуральные числа, выполняет четыре арифметических действия, применяет порядок действий и проверяет ответ прикидкой.</p>
    <table><thead><tr><th>Уроки</th><th>Тема и работа на уроке</th></tr></thead><tbody><tr><td>1–2</td><td>Натуральные числа. Разряды, сравнение и числовой луч.</td></tr><tr><td>3–4</td><td>Сложение и вычитание. Проверка обратным действием.</td></tr><tr><td>5–7</td><td>Умножение и деление. Деление с остатком.</td></tr><tr><td>8–9</td><td>Порядок действий. Числовые выражения со скобками.</td></tr><tr><td>10–11</td><td>Текстовые задачи. Разбор условия, прикидка и проверка.</td></tr><tr><td>12</td><td>Контрольная работа и разбор типичных ошибок.</td></tr></tbody></table>
    <h3>Контроль</h3><p>На уроках 4, 7 и 9 — выходной билет из двух заданий. В конце модуля — вычисления, выражение со скобками и текстовая задача.</p>`},
  {type:'Рабочие программы',grade:'7 класс',title:'Функции и графики',summary:'Проект раздела на 10 уроков по алгебре.',body:`
    <p><strong>Проект раздела рабочей программы.</strong> 10 уроков. План можно адаптировать к календарю и программе школы.</p>
    <h3>Планируемые результаты</h3><p>Ученик читает графики, находит значение функции по аргументу, строит график линейной функции по двум точкам и объясняет роль её коэффициентов.</p>
    <table><thead><tr><th>Уроки</th><th>Тема и работа на уроке</th></tr></thead><tbody><tr><td>1–2</td><td>Координаты на плоскости, таблицы значений.</td></tr><tr><td>3–4</td><td>Функция и способы её задания. Чтение графиков.</td></tr><tr><td>5–7</td><td>Функции y = kx и y = kx + b. Построение прямых.</td></tr><tr><td>8–9</td><td>Пересечение прямых и задачи по графикам.</td></tr><tr><td>10</td><td>Практическая работа и самооценка.</td></tr></tbody></table>
    <h3>Контроль</h3><p>На уроке 4 — чтение готового графика. На уроке 7 — построение прямой. Итоговое задание объединяет построение, чтение и интерпретацию графика.</p>`},
  {type:'Контрольные',grade:'6 класс',title:'Дроби и проценты',summary:'Два варианта по пять заданий и ответы для проверки.',body:`
    <p>Время — 25 минут. Покажите вычисления и запишите ответ к текстовой задаче.</p>
    <h3>Вариант 1</h3><ol><li>Вычислите 5/6 − 1/4.</li><li>Найдите 3/5 от 45.</li><li>Найдите 18% от 250.</li><li>После скидки 20% рюкзак стоит 1600 руб. Сколько он стоил до скидки?</li><li>Какой процент составляют 12 учеников из 30?</li></ol>
    <h3>Вариант 2</h3><ol><li>Вычислите 7/8 − 1/6.</li><li>Найдите 5/8 от 64.</li><li>Найдите 16% от 350.</li><li>После скидки 25% рюкзак стоит 1800 руб. Сколько он стоил до скидки?</li><li>Какой процент составляют 9 учеников из 36?</li></ol>
    <details><summary>Ответы</summary><p>Вариант 1. 7/12; 27; 45; 2000 руб.; 40%.</p><p>Вариант 2. 17/24; 40; 56; 2400 руб.; 25%.</p></details>`},
  {type:'Контрольные',grade:'8 класс',title:'Квадратные уравнения',summary:'Два варианта с уравнениями и задачей на площадь.',body:`
    <p>Время — 30 минут. Укажите способ решения и проверьте корни.</p>
    <h3>Вариант 1</h3><ol><li>Решите x² − 5x + 6 = 0.</li><li>Решите 2x² − 8 = 0.</li><li>Определите число действительных корней x² + 2x + 5 = 0.</li><li>Длина прямоугольника на 3 см больше ширины. Площадь 40 см². Найдите стороны.</li></ol>
    <h3>Вариант 2</h3><ol><li>Решите x² − 7x + 12 = 0.</li><li>Решите 3x² − 27 = 0.</li><li>Определите число действительных корней x² − 4x + 7 = 0.</li><li>Длина прямоугольника на 2 см больше ширины. Площадь 48 см². Найдите стороны.</li></ol>
    <details><summary>Ответы</summary><p>Вариант 1. 2 и 3; −2 и 2; 0 корней; 5 и 8 см.</p><p>Вариант 2. 3 и 4; −3 и 3; 0 корней; 6 и 8 см.</p></details>`},
  {type:'Статьи',grade:'5–7 классы',title:'Как работать над ошибками',summary:'Три шага, которые помогают найти причину ошибки и закрепить способ решения.',body:`
    <h3>Найдите первый неверный шаг</h3><p>Сравните своё решение с правилом, начиная с первой строки. Если написано 1/2 + 1/3 = 2/5, ошибка возникла в момент сложения дробей. Правильный ход — привести их к знаменателю 6.</p>
    <h3>Запишите правило рядом с исправлением</h3><p>Запишите 3/6 + 2/6 = 5/6. Объясните своими словами, почему после приведения к общему знаменателю складываются только числители.</p>
    <h3>Решите похожее задание</h3><p>Попробуйте 1/4 + 1/6. Сначала оцените, будет ли сумма больше 1/2, затем вычислите. Ответ 5/12 меньше 1/2. Вернитесь к похожему заданию через день.</p>`},
  {type:'Статьи',grade:'7–9 классы',title:'Как читать графики',summary:'Памятка по осям, единицам и масштабу с примером.',body:`
    <h3>Начните с осей</h3><p>Прочитайте подписи и единицы. Если по горизонтали указаны минуты, а по вертикали — километры от старта, точка (10; 2) означает, что через 10 минут человек был в двух километрах от старта.</p>
    <h3>Проверьте масштаб</h3><p>Посмотрите, сколько единиц приходится на одну клетку каждой оси. Масштаб по горизонтали и вертикали может различаться.</p>
    <h3>Прочитайте изменения</h3><p>Если с 10-й по 15-ю минуту расстояние от старта остаётся 2 км, график горизонтален. По такому графику можно утверждать только то, что расстояние от старта не менялось.</p>`},
  {type:'Проекты',grade:'5–6 классы',title:'План классной комнаты',summary:'Проект для группы с измерениями, расчётами и чертежом.',body:`
    <p><strong>Вопрос проекта.</strong> Как разместить мебель так, чтобы на плане можно было проверить ширину проходов?</p>
    <ol><li>В группе измерьте длину и ширину кабинета и двух предметов мебели.</li><li>Выберите масштаб 1:50 и переведите размеры в сантиметры на плане. Например, 4 м на местности — 8 см на чертеже.</li><li>Нанесите на план дверь, мебель и проходы. Предложите два варианта расстановки.</li><li>Сравните варианты по ширине проходов и объясните свой выбор.</li></ol>
    <h3>Что сдать</h3><p>Два плана с подписями размеров, таблицу измерений и короткий вывод. Оценка учитывает точность масштаба, полноту обозначений и аргументацию.</p>`},
  {type:'Проекты',grade:'8–9 классы',title:'График температуры в Абакане',summary:'Проект по сбору и анализу погодных данных за две недели.',body:`
    <p><strong>Вопрос проекта.</strong> Насколько изменилась дневная температура в Абакане за две недели?</p>
    <ol><li>Найдите в одном открытом архиве погоды температуру за 14 дней на одно и то же время суток. Запишите даты, время и источник.</li><li>Постройте линейный график. Подпишите оси и единицы измерения.</li><li>Найдите минимум, максимум, размах и среднее. Отметьте два самых резких изменения между соседними днями.</li><li>Объясните, какие выводы можно сделать для выбранных дат и почему двух недель мало для вывода о климате.</li></ol>
    <h3>Что сдать</h3><p>Таблицу наблюдений, график и один абзац с выводами. Оценка учитывает полноту данных, правильность расчётов и ясность вывода.</p>`}
];
const $ = id => document.getElementById(id);
const reader = $('reader');
let slides = [];
let activeSlide = 0;
let trigger;

function showSlide(index) {
  activeSlide = index;
  slides.forEach((slide, i) => { slide.hidden = i !== index; });
  $('progress').textContent = `Слайд ${index + 1} из ${slides.length}`;
  $('prev').disabled = index === 0;
  $('next').disabled = index === slides.length - 1;
}

function openMaterial(item, button) {
  if (!reader.open) trigger = button;
  $('document').innerHTML = `<p class="tag">${item.type} · ${item.grade}</p><h2 id="reader-title">${item.title}</h2>` +
    (item.slides ? item.slides.map(([title, text]) => `<section class="slide"><h3>${title}</h3><p>${text}</p></section>`).join('') : item.body);
  slides = Array.from($('document').querySelectorAll('.slide'));
  formatMath($('document'));
  $('slide-nav').hidden = slides.length === 0;
  if (slides.length) showSlide(0);
  if (!reader.open) reader.showModal();
  reader.scrollTop = 0;
}

function makeCard(item) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<span class="tag">${item.type} · ${item.grade}</span><h3>${item.title}</h3><p>${item.summary}</p><button type="button" aria-label="Открыть: ${item.title}">Открыть материал ↗</button>`;
    const button = card.querySelector('button');
    button.addEventListener('click', () => openMaterial(item, button));
    return card;
}

function mountLibrary(section, items) {
  const content = section.querySelector('.library-content');
  content.append($('library-template').content.cloneNode(true));
  const search = content.querySelector('input');
  const filters = content.querySelector('.type-filters');
  const classFilters = content.querySelector('.class-filters');
  const count = content.querySelector('.count');
  const cards = content.querySelector('.cards');
  const all = 'Все материалы';
  let category = all;
  let grade = 0;
  const normalize = text => text.toLocaleLowerCase('ru').replaceAll('ё','е');
  function render() {
    const words = normalize(search.value.trim()).split(/\s+/);
    const matches = items.filter(item => {
      const text = normalize(`${item.title} ${item.summary} ${item.type} ${item.grade}`);
      const [first, last = first] = item.grade.match(/\d+/g).map(Number);
      return (!grade || (grade >= first && grade <= last)) &&
        (category === all || item.type === category) && words.every(word => text.includes(word));
    });
    count.textContent = matches.length ? `Найдено: ${matches.length}` : 'Материалы не найдены. Попробуйте другое слово или раздел.';
    cards.replaceChildren(...matches.map(makeCard));
  }
  for (const name of [all, ...new Set(items.map(item => item.type))]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = name;
    button.setAttribute('aria-pressed', String(name === all));
    button.addEventListener('click', () => {
      category = name;
      for (const filter of filters.children) filter.setAttribute('aria-pressed', String(filter === button));
      render();
    });
    filters.append(button);
  }
  for (const number of [0, 5, 6, 7, 8, 9, 10, 11]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = number ? number + ' класс' : 'Все классы';
    button.setAttribute('aria-pressed', String(number === grade));
    button.addEventListener('click', () => {
      grade = number;
      category = all;
      search.value = '';
      for (const filter of classFilters.children) filter.setAttribute('aria-pressed', String(filter === button));
      for (const filter of filters.children) filter.setAttribute('aria-pressed', String(filter === filters.firstElementChild));
      render();
    });
    classFilters.append(button);
  }
  search.addEventListener('input', render);
  render();
}
$('close').addEventListener('click', () => reader.close());
let backdropPress = false;
function isReaderBackdrop(event) {
  if (event.target !== reader) return false;
  const bounds = reader.getBoundingClientRect();
  return event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom;
}
reader.addEventListener('pointerdown', event => {
  backdropPress = event.button === 0 && isReaderBackdrop(event);
});
reader.addEventListener('pointercancel', () => { backdropPress = false; });
reader.addEventListener('click', event => {
  const dismiss = backdropPress && isReaderBackdrop(event);
  backdropPress = false;
  if (dismiss) reader.close();
});
reader.addEventListener('close', () => { backdropPress = false; trigger?.focus(); });
$('print').addEventListener('click', () => window.print());
$('prev').addEventListener('click', () => showSlide(activeSlide - 1));
$('next').addEventListener('click', () => showSlide(activeSlide + 1));
const mathLibrary = [
  ...mathGuides.map(guide => makeClassGuide('math', guide)),
  ...mathPractice.map(sheet => makePractice('math', sheet)),
  ...materials.map(item => item.type === 'Проекты' ? {...item,type:'Задания для проектов'} : item),
  ...projectSources.filter(item => item.subject === 'math').map(makeSourceProject)
];
const sportLibrary = [
  ...sportGuides.map(guide => makeClassGuide('sport', guide)),
  ...sportPractice.map(sheet => makePractice('sport', sheet)),
  ...sportMaterials.map(item => item.type === 'Проекты' ? {...item,type:'Задания для проектов'} : item),
  ...projectSources.filter(item => item.subject === 'sport').map(makeSourceProject)
];
mountLibrary($('math').querySelector('.shelf'), mathLibrary);
mountLibrary($('sport').querySelector('.shelf'), sportLibrary);
$('document').addEventListener('click', event => {
  const button = event.target.closest('[data-material-id]');
  if (!button) return;
  const material = [...mathLibrary, ...sportLibrary].find(item => item.id === button.dataset.materialId);
  if (material) { openMaterial(material, button); $('reader-title').tabIndex=-1; $('reader-title').focus(); }
});

function revealSubject() {
  const section = document.getElementById(location.hash.slice(1));
  if (section?.matches('.subject-group')) {
    section.open = true;
    requestAnimationFrame(() => section.scrollIntoView({block: 'start'}));
  }
}
window.addEventListener('hashchange', revealSubject);
document.querySelectorAll('.top a[href="#math"], .top a[href="#sport"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href')).open = true;
  });
});
revealSubject();
