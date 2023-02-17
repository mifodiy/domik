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


  const priceBtn = document.querySelector(".filters__btn--price");
  const pricePopUp = document.querySelector(".price-popup");
  const poolBtn = document.querySelector(".filters__btn--pool");
  const poolPopUp = document.querySelector(".waterpool-popup");
  const entertBtn = document.querySelector(".filters__btn--entertainment");
  const entertPopUp = document.querySelector(".entertainment-popup");
  const bedplaceBtn = document.querySelector(".filters__btn--bedplace");
  const bedplacePopUp = document.querySelector(".bedplace-popup");
  const selectionBtn = document.querySelector(".filters__btn--selection");
  const selectionPopUp = document.querySelector(".selection-popup");

  const togglePopUp = function (popUp) {
    popUp.classList.toggle("active");
  }

  const initPopUp = function (btn, popUp) {
    if (btn && popUp) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePopUp(popUp);
      });
    }

    document.addEventListener("click", function (e) {
      const target = e.target;
      const its_popUp = target == popUp || popUp.contains(target);
      const its_popUpBtn = target == btn;
      const popUp_is_active = popUp.classList.contains("active");

      if (!its_popUp && !its_popUpBtn && popUp_is_active) {
        togglePopUp(popUp);
      }
    });
  }

  initPopUp(priceBtn, pricePopUp);
  initPopUp(poolBtn, poolPopUp);
  initPopUp(entertBtn, entertPopUp);
  initPopUp(bedplaceBtn, bedplacePopUp);
  initPopUp(selectionBtn, selectionPopUp);



  let $range = $(".price-popup__range"),
    $inputFrom = $(".price-popup__input--from"),
    $inputTo = $(".price-popup__input--to"),
    instance,
    min = 0,
    max = 50000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    grid: true,
    type: "double",
    min: min,
    max: max,
    from: 4000,
    to: 50000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });


  const heroSlider = document.querySelector('.hero__slider');

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

  $(".bedplace-popup__input").styler({

  });

  const header = $(".header");
  const scrollChange = 50;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.addClass('sticky header--whitetheme');
    } else {
      header.removeClass("sticky header--whitetheme");
    }
  });

  const burger = document.querySelector('.header__burger');
  const closeMenu = document.querySelector('.side-menu__btn');
  const mobileMenu = document.querySelector('.side-menu');
  const body = document.querySelector('body')

  if (burger != null) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.add('side-menu--active');
      body.classList.add('lock');
    });
  }

  if (closeMenu != null) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('side-menu--active');
      body.classList.remove('lock');
    });
  }

});