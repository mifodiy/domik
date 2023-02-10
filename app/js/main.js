$(function () {
  $('.location__button').on('click', function () {
    $('.location__list').toggleClass('active');
    $('.location__button').toggleClass('active');
  });
  $('.location__list-item').on('click', function () {
    var itemValue = $(this).data('value');
    console.log(itemValue);
    $('.location__button span').text($(this).text()).parent().attr('data-value', itemValue);
    $('.location__list').toggleClass('active');
  });

  let dpMin, dpMax;

  dpMin = new AirDatepicker('.datepicker-min', {
    onSelect({ date }) {
      dpMax.update({
        minDate: date
      })
    }
  })

  dpMax = new AirDatepicker('.datepicker-max', {

  })

  $(".booking-form__range").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 50000,
    from: 4000,
    to: 50000
  });

  const heroSlider = document.querySelector('.hero-slider');

 if (heroSlider != null) {
  const heroSwiper = new Swiper(heroSlider, {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 40,

    navigation: {
      nextEl: heroSlider.nextElementSibling.nextElementSibling,
      prevEl: heroSlider.nextElementSibling,
    },
  })
 }

  $(".booking-form__number").styler({
    
  });

  const header = $(".header");
  const scrollChange = 50;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('sticky');
    } else {
      header.removeClass("sticky");
    }
  });

  const burger = document.querySelector('.header__burger');
  const closeMenu = document.querySelector('.side-menu__btn');
  const mobileMenu = document.querySelector('.side-menu');

  if (burger != null) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('side-menu--active');
    });
  }

  if (closeMenu != null) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('side-menu--active');
    });
  }

});