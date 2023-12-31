

$(document).ready(function () {
  $('#calendar_in').fullCalendar({
    // Опції календаря
    events: [
      // Події календаря
    ],
    select: function (start, end) {
      // currentSelectedDate = start;
      console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
      // console.log('Вибрана дата: ' + currentSelectedDate.format());
    },
    dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
  });

  $('#calendar_out').fullCalendar({
    // Опції календаря
    events: [
      // Події календаря
    ],
    select: function (start, end) {
      // currentSelectedDate = start;
      console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
      // console.log('Вибрана дата: ' + currentSelectedDate.format());
    },
    dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
  });

});


const buttonCheckCalendarIn = document.querySelector('.fa-address-book-o-in')
const buttonCheckCalendarOut = document.querySelector('.fa-address-book-o-out')

const calendarIn = document.querySelector('.calendar-check-in')
const calendarOut = document.querySelector('.calendar-check-out')

buttonCheckCalendarIn && buttonCheckCalendarIn.addEventListener('click', (e) => showCalendarIn(e));
buttonCheckCalendarOut && buttonCheckCalendarOut.addEventListener('click', (e) => showCalendarOut(e));


function showCalendarIn(e) {
  changeInputColor(e.target)
  console.log('dfdg')
  $('.calendar-check-in').toggleClass('active');
  if (calendarIn.classList.contains('active')) {
    $('.calendar-check-in').slideDown('slow'); // Анімація показу
    $('.calendar-check-out').slideUp('slow'); // Анімація схову
  } else {
    $('.calendar-check-in').slideUp('slow'); // Анімація схову
  }
}

function showCalendarOut(e) {
  changeInputColor(e.target)
  $('.calendar-check-out').toggleClass('active');
  if (calendarOut.classList.contains('active')) {
    $('.calendar-check-out').slideDown('slow'); // Анімація показу
    $('.calendar-check-in').slideUp('slow'); // Анімація схову
  } else {
    $('.calendar-check-out').slideUp('slow'); // Анімація схову
  }
}

function changeInputColor(target) {
  const nextEl = target.nextElementSibling
  nextEl.classList.toggle('white')
}

let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
  $('.menu__btn').toggleClass('menu__btn--active');
});
