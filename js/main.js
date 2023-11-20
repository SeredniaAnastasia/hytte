

$(document).ready(function() {
    $('#calendar_in').fullCalendar({
      // Опції календаря
      events: [
        // Події календаря
      ],
      select: function(start, end) {
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
      select: function(start, end) {
        // currentSelectedDate = start;
        console.log('Вибрана дата: ' + start.format() + ' до ' + end.format());
        // console.log('Вибрана дата: ' + currentSelectedDate.format());
      },
      dayNamesShort: ['s', 'm', 't', 'w', 't', 'f', 's'],
    });

  });
  

  const buttonCheckCalendarIn = document.querySelector('.fa-address-book-o-in')
  const buttonCheckCalendarOut = document.querySelector('.fa-address-book-o-out')
  
  const calendarIn = document.querySelector('.calendar-check__in')
  const calendarOut = document.querySelector('.calendar-check__out')
  
  console.log(calendarIn)
  console.log(calendarOut)

  buttonCheckCalendarIn && buttonCheckCalendarIn.addEventListener('click', (e)=>showCalendarIn(e))
  buttonCheckCalendarOut && buttonCheckCalendarOut.addEventListener('click', function (e){
    showCalendarOut(e)
  })
  
  
  function showCalendarIn (e){
    changeInputColor(e.target)
    console.log('dfdg')
    $('.calendar-check__in').toggleClass('active');
    if(calendarIn.classList.contains('active')){
      $('.calendar-check__in').slideDown('slow'); // Анімація показу
      console.log('xx')
    }else{
      console.log('yy')
      $('.calendar-check__in').slideUp('slow'); // Анімація схову
    }
  }

  function showCalendarOut (e){
    console.log('ddfsdfsdssfdg')
    changeInputColor(e.target)
    $('.calendar-check__out').toggleClass('active');
    if(calendarOut.classList.contains('active')){
      $('.calendar-check__out').slideDown('slow'); // Анімація показу
      console.log('xx')
    }else{
      console.log('yy')
      $('.calendar-check__out').slideUp('slow'); // Анімація схову
    }
  }

  function changeInputColor(target){
    const nextEl = target.nextElementSibling
    nextEl.classList.toggle('white')
  }

  let menuBtn = document.querySelector('.menu__btn');
  let menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })

      $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
      });