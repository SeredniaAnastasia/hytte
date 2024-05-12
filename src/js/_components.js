

import 'jquery'; // импортируем сам jQuery
import 'jquery-form-styler'; // затем импортируем плагин
// import 'moment';
// import 'fullcalendar';

// import 'jquery-form-styler/dist/jquery.formstyler.min.js';
// import 'moment/moment.js';
// import 'fullcalendar/dist/fullcalendar.min.js';



$(document).ready(function () {
  console.log($('.main'))
  $('.select-style, .product-one__num').styler();

  // // // Ваш код, де ви використовуєте методи jQuery та jquery-form-styler

  // $('#calendar_in').fullCalendar({
  //   // Опції календаря
  //   events: [
  //     // Події календаря
  //   ],
  //   select: function (start, end) {
  //     // currentSelectedDate = start;
  //     console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
  //     // console.log('Вибрана дата: ' + currentSelectedDate.format());
  //   },
  //   dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
  // });

  // $('#calendar_out').fullCalendar({
  //   // Опції календаря
  //   events: [
  //     // Події календаря
  //   ],
  //   select: function (start, end) {
  //     // currentSelectedDate = start;
  //     console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
  //     // console.log('Вибрана дата: ' + currentSelectedDate.format());
  //   },
  //   dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
  // });

});


var buttonCheckCalendarIn = document.querySelector('.fa-address-book-o-in')
var buttonCheckCalendarOut = document.querySelector('.fa-address-book-o-out')

var calendarIn = document.querySelector('.calendar-check-in')
var calendarOut = document.querySelector('.calendar-check-out')

if (buttonCheckCalendarIn) buttonCheckCalendarIn.addEventListener('click', function (e) { showCalendarIn(e) });
if (buttonCheckCalendarOut) buttonCheckCalendarOut.addEventListener('click', function (e) { showCalendarOut(e) });


function showCalendarIn(e) {
  e.stopPropagation()
  calendarIn.classList.toggle('active')
}

function showCalendarOut(e) {
  e.stopPropagation()
  calendarOut.classList.toggle('active')
}

function changeInputColor(target) {
  const nextEl = target.nextElementSibling
  nextEl.classList.toggle('white');
}


const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
// console.log(menuList);


body?.addEventListener('click', function (e) {
  console.log(e.target)
  menuBtn && menuBtn.classList.remove('menu__btn--active')
  menuList && menuList.classList.remove('menu__list--active')
  body.classList.remove('overflow-hidden');
  if (!e.target.closest('.fc-toolbar')) {
    $('.calendar-check-out').removeClass('active');
    $('.calendar-check-in').removeClass('active');
  }
})

// menuList && menuBtn?.addEventListener('click', (e) => {
//   console.log("toggle")
//   e.stopPropagation()
//   menuBtn.classList.toggle('menu__btn--active');
//   menuList.classList.toggle('menu__list--active');
//   body.classList.toggle('overflow-hidden');
// })


$('.menu__btn').on('click', function (e) {
  e.stopPropagation()
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__btn').toggleClass('menu__btn--active');
});



