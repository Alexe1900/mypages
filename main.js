// Welcome slider

const welcome_image = document.getElementsByClassName("welcome-image")[0];
const welcome_slider_counter_elem = document.getElementsByClassName(
  "welcome-slider-counter"
)[0];
const welcome_slider_paggination_sqares = document.getElementsByClassName(
  "welcome-slider-paggination-square"
);

let welcome_slider_counter = 0;
const welcome_slider_images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

welcome_image.style.setProperty(
  "--welcome-image-path",
  `url(../assets/img/welcome-slider/${welcome_slider_images[welcome_slider_counter]})`
);

welcome_slider_counter_elem.innerHTML =
  "0" + String(welcome_slider_counter + 1);

welcome_slider_paggination_sqares[welcome_slider_counter].classList.add(
  "welcome-slider-paggination-square-active"
);

// Explore slider

const explore_slider = document.getElementsByClassName(
  "explore-slider-block"
)[0];
const explore_before = document.getElementsByClassName(
  "explore-slider-before"
)[0];
const explore_thumb = document.getElementsByClassName(
  "explore-slider-thumb"
)[0];
const body = document.body;

let is_explore_slider_active = false;

explore_thumb.addEventListener("mousedown", () => {
  is_explore_slider_active = true;
});

explore_thumb.addEventListener("mouseup", () => {
  is_explore_slider_active = false;
});

explore_slider.addEventListener("mouseleave", () => {
  is_explore_slider_active = false;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, explore_slider.offsetWidth));
  explore_before.style.width = `${shift}px`;
  explore_thumb.style.left = `${shift - 19.75}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener("mousemove", (e) => {
  if (!is_explore_slider_active) {
    return;
  }

  let x = e.pageX;
  x -= explore_slider.getBoundingClientRect().x;
  beforeAfterSlider(x);
  pauseEvents(e);
});

// Gallery

const galleryInnerContainer = document.getElementsByClassName(
  "gallery-inner-container"
)[0];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const gallery_images = shuffle([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);

gallery_images.forEach((number) => {
  const img = `<img class="gallery-img" src="assets/img/galery/galery${number}.jpg" alt="galery${number}">`;
  galleryInnerContainer.innerHTML += img;
});

// Video

const video_controls_range_1 = document.getElementsByClassName(
  "video-controls-range-1"
)[0];
const video_controls_range_2 = document.getElementsByClassName(
  "video-controls-range-2"
)[0];

video_controls_range_1.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${
    value / 10
  }%, #fff ${value / 10}%, white 100%)`;
});

video_controls_range_2.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`;
});

$(document).ready(function () {
  $(".video-section-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    appendArrows: $(".video-section-slider-controls"),
    appendDots: $(".video-section-slider-controls"),
  });
});

// Tickets

const basicMinusButton =
  document.getElementsByClassName("basic-minus-button")[0];
const basicPlusButton = document.getElementsByClassName("basic-plus-button")[0];
const basicValue = document.getElementsByClassName("basic-value")[0];

const seniorMinusButton = document.getElementsByClassName(
  "senior-minus-button"
)[0];
const seniorPlusButton =
  document.getElementsByClassName("senior-plus-button")[0];
const seniorValue = document.getElementsByClassName("senior-value")[0];

basicMinusButton.addEventListener("click", () => {
  if (Number(basicValue.value) != 0) {
    basicValue.value -= 1;
  }
});
basicPlusButton.addEventListener("click", () => {
  if (Number(basicValue.value) != 20) {
    basicValue.value = String(Number(basicValue.value) + 1);
  }
});

seniorMinusButton.addEventListener("click", () => {
  if (Number(seniorValue.value) != 0) {
    seniorValue.value -= 1;
  }
});
seniorPlusButton.addEventListener("click", () => {
  if (Number(seniorValue.value) != 20) {
    seniorValue.value = String(Number(seniorValue.value) + 1);
  }
});

// Booking form

const openButton = document.getElementsByClassName(
  "tickets-form-right-buy-button"
)[0];
const popup = document.getElementsByClassName("popup-container")[0];

openButton.addEventListener("click", () => {
  popup.style.transform = "translateX(0)";
});

console.log(`Ваша оценка - 136 баллов 
Отзыв по пунктам ТЗ:

Не выполненные/не засчитанные пункты:
1) форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей 
2) форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay 
3) при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select 
4) вёрстка формы соответствует макету 
5) кнопке "Book" в форме покупки билетов добавлен ripple-эффект. Демо: https://50projects50days.com/projects/button-ripple-effect/ 

Выполненные пункты:
1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." 
2) header, main, footer 
3) семь элементов section (по количеству секций)
4) только один заголовок h1 
5) семь заголовков h2 (по количеству секций) 
6) шесть заголовков h3 (по количеству карточек) 
7) два элемента nav (основная и вспомогательная панель навигации) 
8) три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) 
9) тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) 
10) три тега input type="radio" (в секции Tickets) 
11) два тега input type="number"(в секции Tickets) 
12) два тега input type="range" (громкось и прогрес-бар видео) 
13) для всех элементов img указан обязательный атрибут alt 
14) блок header 
15) секция Welcome 
16) секция Visiting 
17) секция Explore 
18) секция Video 
19) секция Gallery 
20) секция Tickets 
21) секция Contacts 
22) блок footer 
23) добавлен favicon 
24) для построения сетки используются флексы или гриды 
25) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону 
26) фоновый цвет каждого блока и секции тянется на всю ширину страницы 
27) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления 
28) расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing 
29) переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка 
30) в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel 
31) в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css 
32) плавная прокрутка по якорям 
33) параллакс 
34) при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe 
35) изменение стиля интерактивных элементов при наведении и клике. Интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты – изменение цвета фона или шрифта, появление подчёркивания и т.д. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили, если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета 
36) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы 
37) интерактивность при наведении карточек в секции Visiting предусматривает плавное растягивание подчёркивания заголовка карточки на всю ширину карточки 
38) интерактивность при наведении иконок социальных сетей в футере предусматривает изменение цвета иконки и круглой границы вокруг иконки на золотистый 
39) можно передвигать ползунки громкости и прогресс-бара видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету 
40) кликами по кнопкам + и - в секции Tickets можно менять количество билетов Basic и Senior от 0 до 20
41) при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке 
`);
