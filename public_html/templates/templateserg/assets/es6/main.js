
$(document).ready(function() {
  //Слайдер верхний на главной странице
   $('.home-slider').slick({
      autoplay: false,
		autoplaySpeed: 2000,
    arrows: false,
    dots: true,
      prevArrow: '<button type="button" class="slick-prev flaticon-arrow-pointing-to-right"></button>',
      nextArrow: '<button type="button" class="slick-next flaticon-arrow-pointing-to-right"></button>'
   });

   //Кнопка вверх
   if ($(window).width() > 1350) {
      $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn();
        } else {
          $('#toTop').fadeOut();
        }
      });
      $('#toTop').on('click',function() {
        $('body,html').animate({scrollTop:0},800);
      });
   }

   //Выпадающий список в меню шапки сайта
   $('.sub-menu-wrap').hover(
    function(){
      $('.sub-menu').fadeIn()
    },
    function(){
      $('.sub-menu').fadeOut()
    });

    $('.main-business-wired-kit-options-icon-box-link').hover(
     function(){
       console.log('222');
       $(this).closest('.main-business-wired-kit-options-icon-box').find('.abouthelper').addClass('activehelper');
     },
     function(){
        $(this).closest('.main-business-wired-kit-options-icon-box').find('.abouthelper').removeClass('activehelper');
         console.log('333');
     });

  //Выпадающий список мобильного меню
    $(document).on('click','.mobile-sub-menu-wrap',function(){

      if ($('#plus').text() === '+'){
        $('#plus').html('&mdash;')
        $('.mobile-sub-menu').show()
      }else {
        $('#plus').text('+')
        $('.mobile-sub-menu').hide()
      }
    })

  // Модальное окно для входа в личный кабинет
      // open modal
      // var wrap = $('#wrapper'),
      //   btn = $('#registr_cabinet,#review-btn'),
      //   modal = $('.cover, .modal, .content'),
      //   close = $('.modal-close'),
      //   state = {
      //     "close": 0
      //   };
      //   btn.on('click', function() {
      //      modal.fadeIn();
      //      $('body').toggleClass('fixed');
      //   });
      //   // close modal
      //    $('.modal').click(function() {
      //      wrap.on('click', function(event) {
      //        var select = $('.content');
      //        $('body').toggleClass('fixed');
      //        if (!$(event.target).closest(select).length && !state.close)
      //          modal.fadeOut();
      //        state.close = 0;
      //        $(this).unbind('click');
      //      });
      //    });
      //    close.on('click', function() {
      //      modal.fadeOut();
      //      state.close = 1;
      //    });

      // Кнопка гамбургер и мобильное меню
      // $('.hamburger').on('click', function() {
  		//   $('.hamburger-line').toggleClass('hamburger-line-active');
  		//   $('.mobile-menu').toggleClass('mobile-menu-active');
  		//   // $('.mobile-menu').fadeToggle(1000);
      //   $('body').toggleClass('fixed');

      // });


    //Слайдер отзывов на странице о компании
    $('#dg-container').gallery({
		autoplay	:	false,
      interval	: 3000
	  });

// $('.dg-about-text p').append('<span class="dg-about-icon1 flaticon-right-quote-sign"></span>');

    //Слайдер наши партнеры на странице о компании
    $('.main-about-eight-slider').slick({
      // infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
		  autoplaySpeed: 3000,
      prevArrow: '<button type="button" class="slick-prev flaticon-arrow-pointing-to-right"></button>',
      nextArrow: '<button type="button" class="slick-next flaticon-arrow-pointing-to-right"></button>',
      responsive: [
        {
           breakpoint: 1000,
           settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
           }
        }
      ]
   });

   //Плавная прокрутка по якорным ссылкам
   $("a.main-about-one-blok-right-link").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });

   //Переключение чекбоксов на странице Охрана бизнеса --------------------
   $.each($('.main-business-wired-kit-options-icon-box-input'),function(index,val){
     if($(this).find('input').prop('checked') == true){
       $(this).addClass('active-checbox')
     };
   });

   let itogPrice = parseInt($('#itogPrice').text())

  $(document).on('click','.main-business-wired-kit-options-icon-box-input',function (event) {
    if ($(this).hasClass('active-checbox')) {
      $(this).find('input').prop('checked',false)
    }else {
      $(this).find('input').prop('checked',true)
    }


    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox1"]').prop('checked')){
      $('.click-checked1').addClass('active-option')
    }else {
      $('.click-checked1').removeClass('active-option')
    }

    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox2"]').prop('checked')){
      $('.click-checked2').addClass('active-option')
      //serviceObslugPlus()

    }else {
      $('.click-checked2').removeClass('active-option')
      //serviceObslugMinus()
    }

    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox3"]').prop('checked')){
      $('.click-checked3').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked3').removeClass('active-option')
      //InternalSirenMinus()

    }



    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox4"]').prop('checked')){
      $('.click-checked4').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked4').removeClass('active-option')
      //InternalSirenMinus()

    }


    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox5"]').prop('checked')){
      $('.click-checked5').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked5').removeClass('active-option')
      //InternalSirenMinus()

    }



    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox6"]').prop('checked')){
      $('.click-checked6').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked6').removeClass('active-option')
      //InternalSirenMinus()

    }



    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox7"]').prop('checked')){
      $('.click-checked7').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked7').removeClass('active-option')
      //InternalSirenMinus()

    }


    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox8"]').prop('checked')){
      $('.click-checked8').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked8').removeClass('active-option')
      //InternalSirenMinus()

    }


    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox9"]').prop('checked')){
      $('.click-checked9').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked9').removeClass('active-option')
      //InternalSirenMinus()

    }


    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox10"]').prop('checked')){
      $('.click-checked10').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked10').removeClass('active-option')
      //InternalSirenMinus()

    }

    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox11"]').prop('checked')){
      $('.click-checked11').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked11').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox12"]').prop('checked')){
      $('.click-checked12').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked12').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox13"]').prop('checked')){
      $('.click-checked13').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked13').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox14"]').prop('checked')){
      $('.click-checked14').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked14').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox15"]').prop('checked')){
      $('.click-checked15').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked15').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox16"]').prop('checked')){
      $('.click-checked16').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked16').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox17"]').prop('checked')){
      $('.click-checked17').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked17').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox18"]').prop('checked')){
      $('.click-checked18').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked18').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox19"]').prop('checked')){
      $('.click-checked19').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked19').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox20"]').prop('checked')){
      $('.click-checked20').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked20').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox21"]').prop('checked')){
      $('.click-checked21').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked21').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox22"]').prop('checked')){
      $('.click-checked22').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked22').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox23"]').prop('checked')){
      $('.click-checked23').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked23').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox24"]').prop('checked')){
      $('.click-checked24').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked24').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox25"]').prop('checked')){
      $('.click-checked25').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked25').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox26"]').prop('checked')){
      $('.click-checked26').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked26').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox27"]').prop('checked')){
      $('.click-checked27').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked27').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox28"]').prop('checked')){
      $('.click-checked28').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked28').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox29"]').prop('checked')){
      $('.click-checked29').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked29').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox30"]').prop('checked')){
      $('.click-checked30').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked30').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox31"]').prop('checked')){
      $('.click-checked31').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked31').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox32"]').prop('checked')){
      $('.click-checked32').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked32').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox33"]').prop('checked')){
      $('.click-checked33').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked33').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox34"]').prop('checked')){
      $('.click-checked34').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked34').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox35"]').prop('checked')){
      $('.click-checked35').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked35').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox36"]').prop('checked')){
      $('.click-checked36').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked36').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox37"]').prop('checked')){
      $('.click-checked37').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked37').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox38"]').prop('checked')){
      $('.click-checked38').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked38').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox39"]').prop('checked')){
      $('.click-checked39').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked39').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox40"]').prop('checked')){
      $('.click-checked40').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked40').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox41"]').prop('checked')){
      $('.click-checked41').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked41').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox42"]').prop('checked')){
      $('.click-checked42').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked42').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox43"]').prop('checked')){
      $('.click-checked43').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked43').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox44"]').prop('checked')){
      $('.click-checked44').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked44').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox45"]').prop('checked')){
      $('.click-checked45').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked45').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox46"]').prop('checked')){
      $('.click-checked46').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked46').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox47"]').prop('checked')){
      $('.click-checked47').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked47').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox48"]').prop('checked')){
      $('.click-checked48').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked48').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox49"]').prop('checked')){
      $('.click-checked49').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked49').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox50"]').prop('checked')){
      $('.click-checked50').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked50').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox51"]').prop('checked')){
      $('.click-checked51').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked51').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox52"]').prop('checked')){
      $('.click-checked52').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked52').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox53"]').prop('checked')){
      $('.click-checked53').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked53').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox54"]').prop('checked')){
      $('.click-checked54').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked54').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox55"]').prop('checked')){
      $('.click-checked55').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked55').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox56"]').prop('checked')){
      $('.click-checked56').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked56').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox57"]').prop('checked')){
      $('.click-checked57').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked57').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox58"]').prop('checked')){
      $('.click-checked58').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked58').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox59"]').prop('checked')){
      $('.click-checked59').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked59').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox60"]').prop('checked')){
      $('.click-checked60').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked60').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox61"]').prop('checked')){
      $('.click-checked61').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked61').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox62"]').prop('checked')){
      $('.click-checked62').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked62').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox63"]').prop('checked')){
      $('.click-checked63').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked63').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox64"]').prop('checked')){
      $('.click-checked64').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked64').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox65"]').prop('checked')){
      $('.click-checked65').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked65').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox66"]').prop('checked')){
      $('.click-checked66').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked66').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox67"]').prop('checked')){
      $('.click-checked67').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked67').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox68"]').prop('checked')){
      $('.click-checked68').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked68').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox69"]').prop('checked')){
      $('.click-checked69').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked69').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox70"]').prop('checked')){
      $('.click-checked70').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked70').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox71"]').prop('checked')){
      $('.click-checked71').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked71').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox72"]').prop('checked')){
      $('.click-checked72').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked72').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox73"]').prop('checked')){
      $('.click-checked73').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked73').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox74"]').prop('checked')){
      $('.click-checked74').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked74').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox75"]').prop('checked')){
      $('.click-checked75').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked75').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox76"]').prop('checked')){
      $('.click-checked76').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked76').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox77"]').prop('checked')){
      $('.click-checked77').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked77').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox78"]').prop('checked')){
      $('.click-checked78').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked78').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox79"]').prop('checked')){
      $('.click-checked79').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked79').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox80"]').prop('checked')){
      $('.click-checked80').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked80').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox81"]').prop('checked')){
      $('.click-checked81').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked81').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox82"]').prop('checked')){
      $('.click-checked82').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked82').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox83"]').prop('checked')){
      $('.click-checked83').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked83').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox84"]').prop('checked')){
      $('.click-checked84').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked84').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox85"]').prop('checked')){
      $('.click-checked85').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked85').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox86"]').prop('checked')){
      $('.click-checked86').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked86').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox87"]').prop('checked')){
      $('.click-checked87').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked87').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox88"]').prop('checked')){
      $('.click-checked88').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked88').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox89"]').prop('checked')){
      $('.click-checked89').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked89').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox90"]').prop('checked')){
      $('.click-checked90').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked90').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox91"]').prop('checked')){
      $('.click-checked91').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked91').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox92"]').prop('checked')){
      $('.click-checked92').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked92').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox93"]').prop('checked')){
      $('.click-checked93').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked93').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox94"]').prop('checked')){
      $('.click-checked94').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked94').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox95"]').prop('checked')){
      $('.click-checked95').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked95').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox96"]').prop('checked')){
      $('.click-checked96').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked96').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox97"]').prop('checked')){
      $('.click-checked97').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked97').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox98"]').prop('checked')){
      $('.click-checked98').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked98').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox99"]').prop('checked')){
      $('.click-checked99').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked99').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox100"]').prop('checked')){
      $('.click-checked100').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked1001').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox101"]').prop('checked')){
      $('.click-checked101').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked101').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox102"]').prop('checked')){
      $('.click-checked102').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked102').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox103"]').prop('checked')){
      $('.click-checked103').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked103').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox104"]').prop('checked')){
      $('.click-checked104').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked104').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox105"]').prop('checked')){
      $('.click-checked105').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked105').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox106"]').prop('checked')){
      $('.click-checked106').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked106').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox107"]').prop('checked')){
      $('.click-checked107').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked107').removeClass('active-option')
      //InternalSirenMinus()

    }
    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox108"]').prop('checked')){
      $('.click-checked108').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked108').removeClass('active-option')
      //InternalSirenMinus()

    }

    if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox109"]').prop('checked')){
      $('.click-checked109').addClass('active-option')
      //InternalSirenPlus()

    }else {
      $('.click-checked109').removeClass('active-option')
      //InternalSirenMinus()

    }  if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox110"]').prop('checked')){
        $('.click-checked110').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked110').removeClass('active-option')
        //InternalSirenMinus()

      }

      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox111"]').prop('checked')){
        $('.click-checked111').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked111').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox112"]').prop('checked')){
        $('.click-checked112').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked112').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox113"]').prop('checked')){
        $('.click-checked113').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked113').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox114"]').prop('checked')){
        $('.click-checked114').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked114').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox115"]').prop('checked')){
        $('.click-checked115').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked115').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox116"]').prop('checked')){
        $('.click-checked116').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked116').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox117"]').prop('checked')){
        $('.click-checked117').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked117').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox118"]').prop('checked')){
        $('.click-checked118').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked118').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox119"]').prop('checked')){
        $('.click-checked119').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked119').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox120"]').prop('checked')){
        $('.click-checked120').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked120').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox121"]').prop('checked')){
        $('.click-checked121').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked121').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox122"]').prop('checked')){
        $('.click-checked122').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked122').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox123"]').prop('checked')){
        $('.click-checked123').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked123').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox124"]').prop('checked')){
        $('.click-checked124').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked124').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox125"]').prop('checked')){
        $('.click-checked125').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked125').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox126"]').prop('checked')){
        $('.click-checked126').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked126').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox127"]').prop('checked')){
        $('.click-checked127').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked127').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox128"]').prop('checked')){
        $('.click-checked128').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked128').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox129"]').prop('checked')){
        $('.click-checked129').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked129').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox130"]').prop('checked')){
        $('.click-checked130').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked130').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox131"]').prop('checked')){
        $('.click-checked131').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked131').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox132"]').prop('checked')){
        $('.click-checked132').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked132').removeClass('active-option')
        //InternalSirenMinus()

      }
      if ($('.main-business-wired-kit-options-icon-box-input > input[name="checkbox133"]').prop('checked')){
        $('.click-checked133').addClass('active-option')
        //InternalSirenPlus()

      }else {
        $('.click-checked133').removeClass('active-option')
        //InternalSirenMinus()

      }





    $(this).toggleClass('active-checbox')
  });
  //-----------------------------------------------------------------------

   //Слайдер отзывы на странице охрана бизнеса
   $('.review22-container').slick({
     // infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     // autoplay: true,
     autoplaySpeed: 3000,
     centerMode: true,
     variableWidth: true,
     // centerPadding: '60px',
     prevArrow: '<button type="button" class="slick-prev flaticon-next"></button>',
     nextArrow: '<button type="button" class="slick-next flaticon-next"></button>',
     responsive: [
      {
          breakpoint: 1000,
          settings: {
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
          }
      }
     ]
  });

  //Аккардион на странице Дополнительная информация
  $( "#accordion" ).accordion({
    //autoHeight:false,
    heightStyle: "content",
    active: true,
    collapsible:true
  });
  $( "#accordion1" ).accordion({
    //autoHeight:false,
    heightStyle: "content",
    active: true,
    collapsible:true
  });

if ( $(window).width() <= 1000 ){
$('.main-box-new-item').each( function(i) {
  if (i >= 6) {
    $(this).remove();
  }
})

  $('.main-box-new-wrap').slick({
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 3000,
    arrows: false

 });
}
else {
  $('.main-box-new-wrap').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    responsive: [
   {
     breakpoint: 1000,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]

 });
}


  // Переключение трех главных табов и клик по первому второстепенному табу (функционал второстепенных ниже)

  $(document).on('click','.main-business-alarm-item',function(){
    $('main-business-alarm-item').removeClass('main-business-alarm-item-active');

    if ($(this).hasClass('trevogsig')) {

      $(this).addClass('main-business-alarm-item-active');
      $('.main-business-alarm-btn.link1').click();
      $('.main-business-basic-kit-link.kit-link1').click().addClass('main-business-basic-kit-link-active');
    } else if ($(this).hasClass('ohransig')) {

      $(this).addClass('main-business-alarm-item-active');
      $('.main-business-alarm-btn.link1').click();
      $('.main-business-basic-kit-link.kit-link1').click().addClass('main-business-basic-kit-link-active');
    }
    else if ($(this).hasClass('ohranandtrev')) {

      $(this).addClass('main-business-alarm-item-active');
      $('.main-business-alarm-btn.link1').click();
      $('.main-business-basic-kit-link.kit-link1').click().addClass('main-business-basic-kit-link-active');
    }

    return false
  })
// Переключалка второстепенных табов и блоков контента в зависимости от активного верхнего (главного таба).
  $(document).on('click','.main-business-alarm-btn',function(){

        if ($('.main-business-alarm-item.trevogsig').hasClass('main-business-alarm-item-active')) {

                      if ($(this).hasClass('link1')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block2.besprovod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap2.wrap1-block2-2').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block3.est').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block1').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap2.wrap1-block1-1').addClass('main-business-wired-kit-wrap2-active');

                      } else if  ($(this).hasClass('link2')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block1.provod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block3.est').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap2.wrap1-block1-1').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block2.besprovod').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap2.wrap1-block2-2').addClass('main-business-wired-kit-wrap2-active');

                      } else if  ($(this).hasClass('link3')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block1.provod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block3.est').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap2.wrap1-block1-1').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap1.wrap1-block2.besprovod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.trevogsig .main-business-wired-kit-wrap2.wrap1-block2-2').removeClass('main-business-wired-kit-wrap2-active');

                    }


    } else if ($('.main-business-alarm-item.ohransig').hasClass('main-business-alarm-item-active')) {

                      if ($(this).hasClass('link1')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block2.besprovod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap2.wrap1-block2-2').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block3.est').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block1').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap2.wrap1-block1-1').addClass('main-business-wired-kit-wrap2-active');

                      } else if  ($(this).hasClass('link2')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block1.provod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block3.est').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap2.wrap1-block1-1').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block2.besprovod').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap2.wrap1-block2-2').addClass('main-business-wired-kit-wrap2-active');

                      } else if  ($(this).hasClass('link3')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block1.provod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block3.est').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap2.wrap1-block1-1').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap1.wrap1-block2.besprovod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohransig .main-business-wired-kit-wrap2.wrap1-block2-2').removeClass('main-business-wired-kit-wrap2-active');

                    }


    } else if (($('.main-business-alarm-item.ohranandtrev').hasClass('main-business-alarm-item-active'))) {


                      if ($(this).hasClass('link1')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block2.besprovod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap2.wrap1-block2-2').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block3.est').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block1').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap2.wrap1-block1-1').addClass('main-business-wired-kit-wrap2-active');

                      } else if  ($(this).hasClass('link2')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block1.provod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block3.est').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap2.wrap1-block1-1').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block2.besprovod').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap2.wrap1-block2-2').addClass('main-business-wired-kit-wrap2-active');

                      } else if  ($(this).hasClass('link3')) {
                          $('.main-business-alarm-btn').removeClass('main-business-alarm-btn-active');
                          $(this).addClass('main-business-alarm-btn-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block1.provod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block3.est').addClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap2.wrap1-block1-1').removeClass('main-business-wired-kit-wrap2-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap1.wrap1-block2.besprovod').removeClass('main-business-wired-kit-wrap1-active');
                          $('.main-business-wired-kit.ohranandtrev .main-business-wired-kit-wrap2.wrap1-block2-2').removeClass('main-business-wired-kit-wrap2-active');

                    }

    }
    $('.main-business-basic-kit-link.kit-link1').click().addClass('main-business-basic-kit-link-active');

    return false
  })


    //Счетчик итоговой стоимости в доп услугах
    $(document).on('click','.main-business-wired-kit-options-icon-box-input',function(){

      var active = false;
      if ($(this).hasClass('active-checbox')) {
        active = true;
      }

      let tekprice = parseInt($(this).closest('.js_summblock').find('#itogPrice').text());
      let tekabon = parseInt($(this).closest('.js_summblock').find('#itogAbon').text());
      let tmp_podkl = $(this).closest('.js_parent').find('.js_podkl .onprc#dop-price-id').text();
      let tmp_abon = $(this).closest('.js_parent').find('.js_abon #dop-price-id').text();

      let prov = isNaN(+tmp_podkl);
      if (prov) {
        tmp_podkl = 0;
      } else { }

      let prov2 = isNaN(+tmp_abon);
      if (prov2) {
        tmp_abon = 0;
      } else { }


      let plus = Number(tekprice)+Number(tmp_podkl);
      let minus = Number(tekprice)-Number(tmp_podkl);
      let plusabon = Number(tekabon)+Number(tmp_abon);
      let minusabon = Number(tekabon)-Number(tmp_abon);



      if (active) {

        $(this).closest('.js_summblock').find('#itogPrice').text(plus);
        $(this).closest('.js_summblock').find('#itogAbon').text(plusabon);

      } else {

        $(this).closest('.js_summblock').find('#itogPrice').text(minus);
        $(this).closest('.js_summblock').find('#itogAbon').text(minusabon);
      }



    })




  //Переключение табов оборудования на странице пультовая охрана
  $(document).on('click','.main-business-basic-kit-link',function(){
    $('.main-business-basic-kit-link').removeClass('main-business-basic-kit-link-active')
    $(this).addClass('main-business-basic-kit-link-active')

    if ($(this).hasClass('kit-link1')){
      $('.main-business-basic-kit-wrap1').removeClass("main-business-basic-kit-wrap1-active")
      $('.basic-kit-wrap1-1').addClass('main-business-basic-kit-wrap1-active')
    }else if ($(this).hasClass('kit-link2')) {
      $('.main-business-basic-kit-wrap1').removeClass("main-business-basic-kit-wrap1-active")
      $('.basic-kit-wrap1-2').addClass('main-business-basic-kit-wrap1-active')
    }else if ($(this).hasClass('kit-link3')) {
      $('.main-business-basic-kit-wrap1').removeClass("main-business-basic-kit-wrap1-active")
      $('.basic-kit-wrap1-3').addClass('main-business-basic-kit-wrap1-active')
    }else if ($(this).hasClass('kit-link4')) {
      $('.main-business-basic-kit-wrap1').removeClass("main-business-basic-kit-wrap1-active")
      $('.basic-kit-wrap1-4').addClass('main-business-basic-kit-wrap1-active')
    }else if ($(this).hasClass('kit-link5')) {
      $('.main-business-basic-kit-wrap1').removeClass("main-business-basic-kit-wrap1-active")
      $('.basic-kit-wrap1-5').addClass('main-business-basic-kit-wrap1-active')
    }else if ($(this).hasClass('kit-link6')) {
      $('.main-business-basic-kit-wrap1').removeClass("main-business-basic-kit-wrap1-active")
      $('.basic-kit-wrap1-6').addClass('main-business-basic-kit-wrap1-active')
    }

    return false
  })

  //Убераем клик по ссылке в слайдере отзывы
  $(document).on('click','.pagination-number-link', function(){
    $('.pagination-number-link').removeClass('pagination-number-link-curent');
    $(this).addClass('pagination-number-link-curent')
  })
  $(document).on('click','#dg-container > div > a', function(){
    return false
  })

});//jQuery

// Кнопка гамбургер и мобильное меню-----------------------
const hamburger = document.querySelector('.hamburger')
const hamburgerLine = document.querySelector('.hamburger-line')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
  hamburgerLine.classList.toggle('hamburger-line-active')
  mobileMenu.classList.toggle('mobile-menu-active')
  body.classList.toggle('fixed')
})


$(document).on('click','.hamb-wrap', function(){
  $('.mobile-menu-hamb').addClass('active');
  $('body').addClass('block-body');
  $('html').addClass('block-body');
})

$(document).on('click','.wrap-exit', function(){
  $('.mobile-menu-hamb').removeClass('active');
  $('body').removeClass('block-body');
  $('html').removeClass('block-body');
})


$(document).on('click','.menu-item.both.mobiledropmenu', function(){
  $(this).find('ul').slideToggle();
  $(this).find('i').toggleClass('rotateitem');

})






//----------------главная переключалка------------------

$(document).on('click','.main-info-list.one', function(){
  $('.main-info-list').removeClass('main-info-list-active');
  $(this).addClass('main-info-list-active');
  $('.main-info-question-wrap').addClass('disp-flex-for-important-menu');
  $('.mobile-info-block').removeClass('disp-flex-for-important-menu');
  $('.pos-documents').removeClass('disp-flex-for-important-menu');
  $('.payment-moment').removeClass('disp-flex-for-important-menu');
  $('.who-system').removeClass('disp-flex-for-important-menu');
  $('.main-info-list.three').removeClass('disp-flex-for-important-menu');
})

$(document).on('click','.main-info-list.five', function(){
  $('.main-info-list').removeClass('main-info-list-active');
  $(this).addClass('main-info-list-active');
  $('.mobile-info-block').addClass('disp-flex-for-important-menu');
  $('.main-info-question-wrap').removeClass('disp-flex-for-important-menu');
  $('.pos-documents').removeClass('disp-flex-for-important-menu');
  $('.payment-moment').removeClass('disp-flex-for-important-menu');
  $('.who-system').removeClass('disp-flex-for-important-menu');
  $('.main-info-list.three').removeClass('disp-flex-for-important-menu');
})
$(document).on('click','.main-info-list.two', function(){
  $('.main-info-list').removeClass('main-info-list-active');
  $(this).addClass('main-info-list-active');
  $('.mobile-info-block').removeClass('disp-flex-for-important-menu');
  $('.main-info-question-wrap').removeClass('disp-flex-for-important-menu');
  $('.main-info-list.three').removeClass('disp-flex-for-important-menu');
  $('.who-system').removeClass('disp-flex-for-important-menu');
  $('.payment-moment').removeClass('disp-flex-for-important-menu');
  $('.pos-documents').addClass('disp-flex-for-important-menu');
})
$(document).on('click','.main-info-list.three', function(){
  $('.main-info-list').removeClass('main-info-list-active');
  $(this).addClass('main-info-list-active');
  $('.mobile-info-block').removeClass('disp-flex-for-important-menu');
  $('.main-info-question-wrap').removeClass('disp-flex-for-important-menu');
  $('.pos-documents').removeClass('disp-flex-for-important-menu');
  $('.who-system').removeClass('disp-flex-for-important-menu');
  $('.payment-moment').addClass('disp-flex-for-important-menu');
})
$(document).on('click','.main-info-list.fo', function(){
  $('.main-info-list').removeClass('main-info-list-active');
  $(this).addClass('main-info-list-active');
  $('.mobile-info-block').removeClass('disp-flex-for-important-menu');
  $('.main-info-question-wrap').removeClass('disp-flex-for-important-menu');
  $('.pos-documents').removeClass('disp-flex-for-important-menu');
  $('.payment-moment').removeClass('disp-flex-for-important-menu');
  $('.who-system').addClass('disp-flex-for-important-menu');
})


//-------Помощь - Страница "мобильное приложение"-----------------------------------
$(document).on('click','.mobi-klaviature', function(){
  $('.mobi-klaviature').addClass('active-class');
  $('.mobi-knopk').removeClass('active-class');
  $('.content-div-swap.one').addClass('active-display')
  $('.content-div-swap.two').removeClass('active-display')
})
$(document).on('click','.mobi-knopk', function(){
  $('.mobi-knopk').addClass('active-class');
  $('.mobi-klaviature').removeClass('active-class');
  $('.content-div-swap.two').addClass('active-display')
  $('.content-div-swap.one').removeClass('active-display')
})

// Помощь, страница оплаты, внутренние табы левое меню //
$(document).on('click','.kvitantion', function(){
  $('.menu-div-payment span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payment').removeClass('disp-flex-for-important-menu');
  $('.content-div-payment.kvit').addClass('disp-flex-for-important-menu')
})

$(document).on('click','.sber-online', function(){
  $('.menu-div-payment span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payment').removeClass('disp-flex-for-important-menu');
  $('.content-div-payment.online').addClass('disp-flex-for-important-menu')
})

$(document).on('click','.avtoplat', function(){
  $('.menu-div-payment span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payment').removeClass('disp-flex-for-important-menu');
  $('.content-div-payment.avtopl').addClass('disp-flex-for-important-menu')
})

$(document).on('click','.cards', function(){
  $('.menu-div-payment span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payment').removeClass('disp-flex-for-important-menu');
  $('.content-div-payment.cardss').addClass('disp-flex-for-important-menu')
})
$(document).on('click','.qiwi', function(){
  $('.menu-div-payment span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payment').removeClass('disp-flex-for-important-menu');
  $('.content-div-payment.termenal').addClass('disp-flex-for-important-menu')
})
$(document).on('click','.beznal', function(){
  $('.menu-div-payment span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payment').removeClass('disp-flex-for-important-menu');
  $('.content-div-payment.untermenal').addClass('disp-flex-for-important-menu')
})
//---Как работает система -- табы внутри --//
$(document).on('click','.kvitantions', function(){
  $('.menu-div-payments span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payments').removeClass('disp-flex-for-important-menu');
  $('.content-div-payments.kvits').addClass('disp-flex-for-important-menu')
})

$(document).on('click','.sber-onlines', function(){
  $('.menu-div-payments span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payments').removeClass('disp-flex-for-important-menu');
  $('.content-div-payments.onlines').addClass('disp-flex-for-important-menu')
})

$(document).on('click','.avtoplats', function(){
  $('.menu-div-payments span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payments').removeClass('disp-flex-for-important-menu');
  $('.content-div-payments.avtopls').addClass('disp-flex-for-important-menu')
})

$(document).on('click','.cardsd', function(){
  $('.menu-div-payments span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payments').removeClass('disp-flex-for-important-menu');
  $('.content-div-payments.cardssd').addClass('disp-flex-for-important-menu')
})
$(document).on('click','.qiwis', function(){
  $('.menu-div-payments span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payments').removeClass('disp-flex-for-important-menu');
  $('.content-div-payments.termenals').addClass('disp-flex-for-important-menu')
})
$(document).on('click','.beznals', function(){
  $('.menu-div-payments span').removeClass('active-class');
  $(this).addClass('active-class');
  $('.content-div-payments').removeClass('disp-flex-for-important-menu');
  $('.content-div-payments.untermenals').addClass('disp-flex-for-important-menu')
})




$(document).on('click','.one_object', function(){
  $('.one_object').removeClass('active-object');
  $(this).addClass('active-object');
  $('.one_object').removeClass('last-item');
  $(this).addClass('last-item');
  $('.checkmark').removeClass('active-check');
  $('.one-object-divs').removeClass('active-item-obj');
  $('.one-object-divs').removeClass('active_item_show');
})

$(document).on('click','.one_object', function(){
  let tmp_attr = parseInt($(this).attr('attr_show'));
  $('.one-object-divs').removeClass('last-item1');
  $('.one-object-divs').removeClass('active-item-obj');
  $('.one-object-divs').removeClass('active_item_show');
  $('#show_object_'+tmp_attr).addClass('active-item-obj');
  $('#show_object_'+tmp_attr).addClass('last-item1');
    setTimeout(function(){
      $('#show_object_'+tmp_attr).addClass('active_item_show');
    },200)


})

  $(document).on('click','.wiew-all', function(){
    $('.checkmark').toggleClass('active-check');
    $('.one-object-divs').addClass('active-item-obj');
    $('.one-object-divs').addClass('active_item_show');
    $('#wwall').addClass('unactive');
  })
  $(document).on('click','.unactive', function(){
    $('.checkmark').toggleClass('active-check');
    $('.one-object-divs').removeClass('active-item-obj');
    $('.one-object-divs').removeClass('active_item_show');
    $('#wwall').removeClass('unactive');
    $('.last-item').addClass('active-object')
    $('.last-item1').addClass('active-item-obj')
    $('.last-item1').addClass('active_item_show')
    $('.checkmark').removeClass('active-check');
  })

  $(document).on('click','.lc-one-tab.inform', function(){
    $('.content-item-lc').removeClass('activ-wrapper-lc');
    $('.lc-one-tab').removeClass('active-lc');
    $(this).addClass('active-lc');
    $('.content-item-lc.info').addClass('activ-wrapper-lc');

  })

  $(document).on('click','.lc-one-tab.finans', function(){
    $('.content-item-lc').removeClass('activ-wrapper-lc');
    $('.lc-one-tab').removeClass('active-lc');
    $(this).addClass('active-lc');
    $('.content-item-lc.finans').addClass('activ-wrapper-lc');
  })

  $(document).on('click','.lc-one-tab.payment', function(){
    $('.content-item-lc').removeClass('activ-wrapper-lc');
    $('.lc-one-tab').removeClass('active-lc');
    $(this).addClass('active-lc');
    $('.content-item-lc.payment').addClass('activ-wrapper-lc');
  })

  $(document).on('click','.finans-info-tab.form-zapln', function(){
    $('.finans-info-tab').removeClass('active-item-finans');
    $('.swap-wrapper-finans').removeClass('active-wrapper-fin-info');
    $('.swap-wrapper-finans.form-zapln').addClass('active-wrapper-fin-info');
    $(this).addClass('active-item-finans');

  })
  $(document).on('click','.finans-info-tab.docs-arh', function(){
    $('.finans-info-tab').removeClass('active-item-finans');
    $('.swap-wrapper-finans').removeClass('active-wrapper-fin-info');
    $('.swap-wrapper-finans.docs-arh').addClass('active-wrapper-fin-info');
    $(this).addClass('active-item-finans');

  })
  $(document).on('click','.finans-info-tab.buh-form', function(){
    $('.finans-info-tab').removeClass('active-item-finans');
    $('.swap-wrapper-finans').removeClass('active-wrapper-fin-info');
    $('.swap-wrapper-finans.buh-form').addClass('active-wrapper-fin-info');
    $(this).addClass('active-item-finans');

  })

  $(document).on('click','.tab-control.ohr', function(){
    $('.tab-control').removeClass('active-control');
    $('.uslugi-payment').removeClass('activ-control-payment');
    $('.uslugi-payment.ohrana').addClass('activ-control-payment');
    $(this).addClass('active-control');

  })
  $(document).on('click','.tab-control.teh', function(){
    $('.tab-control').removeClass('active-control');
    $('.uslugi-payment').removeClass('activ-control-payment');
    $('.uslugi-payment.teh-obs').addClass('activ-control-payment');
    $(this).addClass('active-control');

  })
  $(document).on('click','.standard-item-table > div >  label', function(){
    $(this).toggleClass('active-check-for-price');
  })


  $(document).on('click','.main-business-alarm-item.trevogsig', function(){
  $('.main-business-alarm-item').removeClass('main-business-alarm-item-active');
  $(this).addClass('main-business-alarm-item-active');
  $('.main-business-wired-kit').removeClass('active_sig');
  $('.main-business-wired-kit.trevogsig').addClass('active_sig');

  })

  $(document).on('click','.main-business-alarm-item.ohransig', function(){
  $('.main-business-alarm-item').removeClass('main-business-alarm-item-active');
  $(this).addClass('main-business-alarm-item-active');
  $('.main-business-wired-kit').removeClass('active_sig');
  $('.main-business-wired-kit.ohransig').addClass('active_sig');

  })

  $(document).on('click','.main-business-alarm-item.ohranandtrev', function(){
  $('.main-business-alarm-item').removeClass('main-business-alarm-item-active');
  $(this).addClass('main-business-alarm-item-active');
  $('.main-business-wired-kit').removeClass('active_sig');
  $('.main-business-wired-kit.ohranandtrev').addClass('active_sig');

  })

//Калькулятор
$(".calculate input"  ).keydown(function (e) {
if ( e.keyCode != 8 ) {
 if ( (e.keyCode < 48) || (e.keyCode > 57) ) {
 return false;
 }
 console.log(e.keyCode);
}



});

$(".calculate input"  ).keydown(function (e) {
if (e.shiftKey && e.keyCode ) {
   return false;
}


});


$(".kol-tab.standard input"  ).keydown(function (e) {
if ( e.keyCode != 8 ) {
 if ( (e.keyCode < 48) || (e.keyCode > 57) ) {
 return false;
 }
 console.log(e.keyCode);
}



});

$(".kol-tab.standard input"  ).keydown(function (e) {
if (e.shiftKey && e.keyCode ) {
   return false;
}


});


    $(".container-for-price-table.two-table .kol-tab input"  ).keyup(function (e) {

      let kolich = $(this).val();
      if (parseInt(kolich) == 0) {
        kolich = 1;
        $(this).closest(".standard-item-table").find(".sum-tab.standard").removeClass('activeitem');
      } else if ($.trim(kolich) == "") {

        kolich = 1;
        $(this).closest(".standard-item-table").find(".sum-tab.standard").removeClass('activeitem');

      } else  {
        $(this).closest(".standard-item-table").find(".sum-tab.standard").addClass('activeitem');
      }
      let item = $(this).closest(".standard-item-table").find('.sum-tab.standard').attr('data-price');
      let price = kolich * item;
        price = Math.round(price);
      $(this).closest(".standard-item-table").find(".sum-tab.standard").html(price);
      let itog = 0;

    $('.two-table .standard-item-table .sum-tab.standard.activeitem').each(function(i){
      itog = itog + parseInt($(this).text());

    })
      $(".two-table .sum-tab.standard.absorbe.result").text(itog);

    });

// Вторая таблица проценты от чекбоксов, вычет и прибавление
$(document).on('change', '#eks-z', function(){

if ($(this).prop('checked')){
  let procentone = $(this).closest('.standard-item-table').find('.onem').val();
  let item = $(this).closest('.container-for-price-table.two-table');

  $('.container-for-price-table.two-table .sum-tab.standard.cenn').each(function(i,v){
  let permprice = $(this).attr('data-permanent');
  console.log(permprice);
  let procentpribav = (permprice / 100) * procentone;
  console.log(procentpribav);
  let tekc = $(this).attr('data-price') ;
  let itprice = Number(tekc) + Number(procentpribav);

  $(this).attr('data-price', itprice);
  let kolich = $(this).closest('.standard-item-table').find('.kol-tab.standard input').val();
  if (parseInt(kolich) == 0) {
    kolich = 1;
  } else if ($.trim(kolich) == "") {
    kolich = 1;
  } else  {
  }
  let finalprice = Number(itprice)*Number(kolich);
  finalprice = Math.round(finalprice);
  $(this).text(finalprice);
  })
    let itog = 0;
  $('.container-for-price-table.two-table .standard-item-table .sum-tab.standard.cenn.activeitem').each(function(i){
    itog = itog + parseInt($(this).text());

  })
    $(".container-for-price-table.two-table .sum-tab.standard.absorbe.result").text(itog);


} else {
  let procentone = $(this).closest('.standard-item-table').find('.onem').val();
  let item = $(this).closest('.container-for-price-table.two-table');

  $('.container-for-price-table.two-table .sum-tab.standard.cenn').each(function(i,v){
  let permprice = $(this).attr('data-permanent');
  console.log(permprice);
  let procentpribav = (permprice / 100) * procentone;
  console.log(procentpribav);
  let tekc = $(this).attr('data-price') ;
  let itprice = Number(tekc) - Number(procentpribav);

  $(this).attr('data-price', itprice);
  let kolich = $(this).closest('.standard-item-table').find('.kol-tab.standard input').val();
  if (parseInt(kolich) == 0) {
    kolich = 1;
  } else if ($.trim(kolich) == "") {
    kolich = 1;
  } else  {
  }
  let finalprice = Number(itprice)*Number(kolich);
    finalprice = Math.round(finalprice);
  $(this).text(finalprice);
  })
    let itog = 0;
  $('.container-for-price-table.two-table .standard-item-table .sum-tab.standard.cenn.activeitem').each(function(i){
    itog = itog + parseInt($(this).text());

  })
    $(".container-for-price-table.two-table .sum-tab.standard.absorbe.result").text(itog);


}


})


$(document).on('change', '#vusota', function(){

if ($(this).prop('checked')){
  let procentone = $(this).closest('.standard-item-table').find('.twom').val();
  let item = $(this).closest('.container-for-price-table.two-table');

  $('.container-for-price-table.two-table .sum-tab.standard.cenn').each(function(i,v){
  let permprice = $(this).attr('data-permanent');
  console.log(permprice);
  let procentpribav = (permprice / 100) * procentone;
  console.log(procentpribav);
  let tekc = $(this).attr('data-price') ;
  let itprice = Number(tekc) + Number(procentpribav);

  $(this).attr('data-price', itprice);
  let kolich = $(this).closest('.standard-item-table').find('.kol-tab.standard input').val();
  if (parseInt(kolich) == 0) {
    kolich = 1;
  } else if ($.trim(kolich) == "") {
    kolich = 1;
  } else  {
  }
  let finalprice = Number(itprice)*Number(kolich);
    finalprice = Math.round(finalprice);
  $(this).text(finalprice);
  })
    let itog = 0;
  $('.container-for-price-table.two-table .standard-item-table .sum-tab.standard.cenn.activeitem').each(function(i){
    itog = itog + parseInt($(this).text());

  })
    $(".container-for-price-table.two-table .sum-tab.standard.absorbe.result").text(itog);


} else {
  let procentone = $(this).closest('.standard-item-table').find('.twom').val();
  let item = $(this).closest('.container-for-price-table.two-table');

  $('.container-for-price-table.two-table .sum-tab.standard.cenn').each(function(i,v){
  let permprice = $(this).attr('data-permanent');
  console.log(permprice);
  let procentpribav = (permprice / 100) * procentone;
  console.log(procentpribav);
  let tekc = $(this).attr('data-price') ;
  let itprice = Number(tekc) - Number(procentpribav);

  $(this).attr('data-price', itprice);
  let kolich = $(this).closest('.standard-item-table').find('.kol-tab.standard input').val();
  if (parseInt(kolich) == 0) {
    kolich = 1;
  } else if ($.trim(kolich) == "") {
    kolich = 1;
  } else  {
  }
  let finalprice = Number(itprice)*Number(kolich);
    finalprice = Math.round(finalprice);
  $(this).text(finalprice);
  })
    let itog = 0;
  $('.container-for-price-table.two-table .standard-item-table .sum-tab.standard.cenn.activeitem').each(function(i){
    itog = itog + parseInt($(this).text());

  })
    $(".container-for-price-table.two-table .sum-tab.standard.absorbe.result").text(itog);


}


})


$(document).on('change', '#usl', function(){

if ($(this).prop('checked')){
  let procentone = $(this).closest('.standard-item-table').find('.threm').val();
  let item = $(this).closest('.container-for-price-table.two-table');

  $('.container-for-price-table.two-table .sum-tab.standard.cenn').each(function(i,v){
  let permprice = $(this).attr('data-permanent');
  console.log(permprice);
  let procentpribav = (permprice / 100) * procentone;
  console.log(procentpribav);
  let tekc = $(this).attr('data-price') ;
  let itprice = Number(tekc) + Number(procentpribav);

  $(this).attr('data-price', itprice);
  let kolich = $(this).closest('.standard-item-table').find('.kol-tab.standard input').val();
  if (parseInt(kolich) == 0) {
    kolich = 1;
  } else if ($.trim(kolich) == "") {
    kolich = 1;
  } else  {
  }
  let finalprice = Number(itprice)*Number(kolich);
    finalprice = Math.round(finalprice);
  $(this).text(finalprice);
  })
    let itog = 0;
  $('.container-for-price-table.two-table .standard-item-table .sum-tab.standard.cenn.activeitem').each(function(i){
    itog = itog + parseInt($(this).text());

  })
    $(".container-for-price-table.two-table .sum-tab.standard.absorbe.result").text(itog);


} else {
  let procentone = $(this).closest('.standard-item-table').find('.threm').val();
  let item = $(this).closest('.container-for-price-table.two-table');

  $('.container-for-price-table.two-table .sum-tab.standard.cenn').each(function(i,v){
  let permprice = $(this).attr('data-permanent');
  console.log(permprice);
  let procentpribav = (permprice / 100) * procentone;
  console.log(procentpribav);
  let tekc = $(this).attr('data-price') ;
  let itprice = Number(tekc) - Number(procentpribav);

  $(this).attr('data-price', itprice);
  let kolich = $(this).closest('.standard-item-table').find('.kol-tab.standard input').val();
  if (parseInt(kolich) == 0) {
    kolich = 1;
  } else if ($.trim(kolich) == "") {
    kolich = 1;
  } else  {
  }
  let finalprice = Number(itprice)*Number(kolich);
    finalprice = Math.round(finalprice);
  $(this).text(finalprice);
  })
    let itog = 0;
  $('.container-for-price-table.two-table .standard-item-table .sum-tab.standard.cenn.activeitem').each(function(i){
    itog = itog + parseInt($(this).text());

  })
    $(".container-for-price-table.two-table .sum-tab.standard.absorbe.result").text(itog);


}


})




































    $(".calculate input"  ).keyup(function (e)
    {

      let kolich = $(this).val();
      if (parseInt(kolich) == 0) {
        kolich = 1;
        $(this).closest(".standard-item-table").find(".sum-tab.standard").removeClass('activeitem');
      } else if ($.trim(kolich) == "") {

        kolich = 1;
        $(this).closest(".standard-item-table").find(".sum-tab.standard").removeClass('activeitem');

      } else  {
        $(this).closest(".standard-item-table").find(".sum-tab.standard").addClass('activeitem');
      }

      let item = $(this).closest(".standard-item-table").find('.sum-tab.standard').attr('data-price');
      let price = kolich * item;
      $(this).closest(".standard-item-table").find(".sum-tab.standard").html(price);
      let itog = 0;

    $('.one-table .standard-item-table .sum-tab.standard.result.activeitem').each(function(i){
      itog = itog + parseInt($(this).text());

    })
      $(".one-table .sum-tab.standard.absorbe.result").text(itog);
    });





    $( ".forclosest input" ).focusin(function() {
    $(this).addClass('untransparent');
    $(this).closest('.forclosest').find('label').addClass('movetrash');
});


    $( ".forclosest input" ).focusout(function() {

    // $(this).closest('.forclosest').find('label').removeClass('test');
});

$( ".important input" ).focusin(function() {
$(this).addClass('untransparent');
$(this).closest('.important').find('label').addClass('movetrash');
$(this).closest('.important').find('p').addClass('offhidden');
});

$( ".important input" ).focusout(function() {
$(this).closest('.important').find('p').removeClass('offhidden');
});


$(".sub.zab").click(function() {
  $('.foget-passwodr.zab').addClass('activezab');
});

$(".backavtorize").click(function() {
  $('.foget-passwodr.zab').removeClass('activezab');
});




var maskedInputs = document.querySelectorAll("[data-mask]");

for (var index = 0; index < maskedInputs.length; index++) {
  maskedInputs[index].addEventListener('input', maskInput);
}

function maskInput() {
  var input = this;
  var mask = input.dataset.mask;
  var value = input.value;
  var literalPattern = /[0\*]/;
  var numberPattern = /[0-9]/;
  var newValue = "";
  try {
    var maskLength = mask.length;
    var valueIndex = 0;
    var maskIndex = 0;

    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) break;

      if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;

      // Found a literal
      while (mask[maskIndex].match(literalPattern) === null) {
        if (value[valueIndex] === mask[maskIndex]) break;
        newValue += mask[maskIndex++];
      }
      newValue += value[valueIndex++];
      maskIndex++;
    }

    input.value = newValue;
  } catch (e) {
    console.log(e);
  }
}


$( document ).ready(function() {

  function sendAjaxForm(result_form, registrate, url) {

      $.ajax({
          url:     url, //url страницы (action_ajax_form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: $("#"+registrate).serialize(),  // Сеарилизуем объект
          success: function(response) { //Данные отправлены успешно
            console.log(response);
            try {
              let	result = JSON.parse(response);

              if(result.error) {
                $('#result_form').html(result.error);
              } else {

                $('#result_form').html(''+result.login+', мы отправили Вам на почту письмо для подтверждения регистрации');

              }

            } catch (e) {

                $("#result_form").html('Ошибка. Данные не отправлены.');
            }


      	},
      	error: function(response) { // Данные не отправлены

              $("#result_form").html('Ошибка. Данные не отправлены.');
      	}
   	});
  }
    $(".nextsumb").click(
		function(){
      let pravo = $('input#registration-152-federal-law').prop('checked');

      if(pravo) {
			sendAjaxForm('#result_form', 'registrate', $("#registrate")[0].action);
			return false;
    }  else {
      $("#result_form").html('Подтвердите согласие на обработку данных.');
      return false;
    }

		}
	);
});



// forma backavtorizacii


$( document ).ready(function() {

  function sendAjaxForm(errorlogauth, authorize, url) {

    $.ajax({
            url:     url, //url страницы (action_ajax_form.php)
            type:     "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#"+authorize).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
            console.log(response);

            try {

              let	result = JSON.parse(response);
                console.log(result);
                if(result.error) {
                  $('#errorlogauth').html(result.error);
                } else {

                console.log('Авторизировался');

                }

            } catch (e) {
              location.href=location.origin+"/help/"
            }




        	},
        	error: function(response) { // Данные не отправлены
                $('#errorlogauth').html('Ошибка. Данные не отправлены.');


        	}
     	});
    }

    $(".submitautoh").click(
		function(){

			sendAjaxForm('#errorlogauth', 'authorize', $("#authorize")[0].action);
			return false;

      return false;


		}
	);
});
