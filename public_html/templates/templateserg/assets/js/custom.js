$(document).ready(function(){

  $( ".input-container input" ).on( "click", function() {
    $(this).closest('.input-container').find('label').css('top','-15px');
  });

  $( ".psevdo-checkbox" ).on( "click", function() {
    $(this).toggleClass("active-psevdo");
  });

  $( ".psevdo-checkbox" ).on( "click", function() {
    let stat = $(this).closest('.wrapper-for-checkbox').find('.checkklient').val();
    console.log(stat);
    if (stat == "Нет") {
      $(this).closest('.wrapper-for-checkbox').find('.checkklient').val("Да");
    }  else {
      $(this).closest('.wrapper-for-checkbox').find('.checkklient').val("Нет");
    }
  });

  $( ".button-zv" ).on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.callback').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });
  $( ".for-callback-modal" ).on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.callback').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });
  $( ".callback-on" ).on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.callback').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });
  $( ".main-info-btn-wrap .main-btn" ).on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.callback').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });



  $(".main-btn.zayavk").on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.zayavk').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });
  $(".main-btn.bussines-btn.for-form").on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.zayavk').addClass('active-ov-mod');
    $('html').addClass('fix-html');
    let testvalue = $(".ohrana-val-rod").val();
    if (testvalue == "") {
        let text = $(".main-business-alarm-item.trevogsig").text().trim();
        $(".ohrana-val-rod").val(text);
    }
    let testvalueTwo = $(".ohrana-val-child").val();
    if (testvalueTwo == "") {
        let text = $(".main-business-alarm-btn.link1").text().trim();
        $(".ohrana-val-child").val(text);
    }
  });
  $(".main-btn.bussines-btn.car").on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.zayavk').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });


  $( ".callback-bt" ).on( "click", function() {
    $('.shadow-overlay').addClass('active-ov-mod');
    $('.modal-order-a-call.callback').addClass('active-ov-mod');
    $('html').addClass('fix-html');
  });

  $( ".exit-in-order-call" ).on( "click", function() {
    $('.shadow-overlay').removeClass('active-ov-mod');
    $('.modal-order-a-call.callback').removeClass('active-ov-mod');
    $('html').removeClass('fix-html');
    $('.success-message').removeClass('active-ov-mod');
    $('.modal-order-a-call.contact').removeClass('active-ov-mod');
    $('.modal-order-a-call.chop').removeClass('active-ov-mod');
    $('.modal-order-a-call.zayavk').removeClass('active-ov-mod');
    $('.wrapper-donation').removeClass('active-ov-mod');


  });

// Модальное окно комментариев
$( "#review-btn").on( "click", function() {
  $('.shadow-overlay').addClass('active-ov-mod');
  $('.modal-order-a-call.contact').addClass('active-ov-mod');
  $('html').addClass('fix-html');
    });

//чоп мод окно
  $(".modal-chop").on( "click", function() {
  $('.shadow-overlay').addClass('active-ov-mod');
  $('.modal-order-a-call.chop').addClass('active-ov-mod');
  $('html').addClass('fix-html');
  });

  $("span.lc-cb.activedonation").on( "click", function() {
  $('.wrapper-donation').addClass('active-ov-mod');
  $('html').addClass('fix-html');
  $('.shadow-overlay').addClass('active-ov-mod');
  });


function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

$( document ).ready(function(){


	// заказ звонка
  $("#send-button-order").click (
		function(){

		let valid = $('.validnumEmail').val();

    var tmp_test_nomber_dogovar = $('.numberDogovor').val();
    if(!tmp_test_nomber_dogovar) {
      $('.numberDogovor').val("Нет");
    }

		var tmp_test_email = isEmail(valid);
		var tmp_test_phone = '';

		// Если НЕ E-Mail
		if ( !tmp_test_email ){
			tmp_test_phone = valid.replace(/[^\d]/g, '');

			if ( $.trim( tmp_test_phone ) != '' ){

				if ( tmp_test_phone.length != 11 ){
					tmp_test_phone = false;
				}else{
					tmp_test_phone = '+' + tmp_test_phone;

					$('#send_call_back').val(tmp_test_phone);
				}
			}else{
				tmp_test_phone = false;
			}
		}

    console.log('tmp_test_nomber_dogovar ' + tmp_test_nomber_dogovar);
		console.log('tmp_test_email: ' + tmp_test_email);
		console.log('tmp_test_phone: ' + tmp_test_phone);

		if (tmp_test_email || tmp_test_phone) {

			if ( tmp_test_phone ){
				$('#type_field').val('phone');
			}else{
				$('#type_field').val('email');
			}

			sendAjaxForm('result_form', 'aj_form', '/webforms/send');
			return false;
		}else{
			$(".labelvalid").css("color","red");
		}
		}
	);

	// отзывы
	$(document).on('click', '#send-button-ordercomments', function(){

    var tmp_test_nomber_dogovar = $('.numberDogovor').val();
    if(!tmp_test_nomber_dogovar) {
      $('.numberDogovor').val("Нет");
    }

		let valid = $('.modal-order-a-call.contact .otzyv-message').val();


		if (valid != "") {
			sendAjaxFormСom('result_form', 'contact_aj_form', '/webforms/send');
			return false;
		}else{
			console.log('add CSS');
			$(".modal-order-a-call.contact .message.valid").css("color","red");
		}
	})

	// заказ чоп
	$(document).on('click', '#send-button-orderchop', function(){
		let valid = $('#telefon_klienta_chop').val();

		tmp_test_phone = valid.replace(/[^\d]/g, '');

		if ( $.trim( tmp_test_phone ) != '' ){

			if ( tmp_test_phone.length != 11 ){
				tmp_test_phone = false;
			}else{
				tmp_test_phone = '+' + tmp_test_phone;
			}
		}else{
			tmp_test_phone = false;
		}

		if (tmp_test_phone != false ) {

			$('#telefon_klienta_chop').val(tmp_test_phone);

			sendAjaxFormZak('result_form', 'chop_aj_form', '/webforms/send');
			return false;
		}else{
			console.log('add CSS chop');
			$(".modal-order-a-call.chop.active-ov-mod .labelvalid").css("color","red");
		}
	})


	// Оставить заявку
	$(document).on('click', '#send-button-orderzayavk', function(){

    var tmp_test_nomber_dogovar = $('.numberDogovor').val();
    if(!tmp_test_nomber_dogovar) {
      $('.numberDogovor').val("Нет");
    }
    
		let valid = $('.modal-order-a-call.zayavk .validnumEmail').val();

		var tmp_test_email = isEmail(valid);
		var tmp_test_phone = '';

		// Если НЕ E-Mail
		if ( !tmp_test_email ){
			tmp_test_phone = valid.replace(/[^\d]/g, '');

			if ( $.trim( tmp_test_phone ) != '' ){

				if ( tmp_test_phone.length != 11 ){
					tmp_test_phone = false;
				}else{
					tmp_test_phone = '+' + tmp_test_phone;

					$('#send_call_back').val(tmp_test_phone);
				}
			}else{
				tmp_test_phone = false;
			}
		}

		console.log('tmp_test_email: ' + tmp_test_email);
		console.log('tmp_test_phone: ' + tmp_test_phone);

		if (tmp_test_email || tmp_test_phone) {

			ZayavkSendAjaxFormСom('result_form', 'zayavk_aj_form', '/webforms/send');
			return false;
		}else{
			$(".modal-order-a-call.zayavk .labelvalid").css("color","red");
		}
	})

	// Вопросы от клиента
	$(document).on('click', '#have_questions_contact_aj_form .main-btn', function(evt){

		evt.preventDefault();

		var total_error = false;
		$('#imya_have_questions').removeClass('input_error');
		$('#email_have_questions').removeClass('input_error');
		$('#tel_have_questions').removeClass('input_error');
		$('#msg_have_questions').removeClass('input_error');
		$('.home-contacts-checkbox label').removeClass('input_error_chk_box');

		let valid_imya	= $('#imya_have_questions').val();
		let valid_email	= $('#email_have_questions').val();
		let valid_tel	= $('#tel_have_questions').val();
		let valid_msg	= $('#msg_have_questions').val();
		let valid_chbox	= $('#check_choise').val();

		if ( $.trim(valid_imya) == '' ){
			$('#imya_have_questions').addClass('input_error');
			total_error = true;
		}

		var tmp_test_email = isEmail(valid_email);
		if ( !tmp_test_email ){
			$('#email_have_questions').addClass('input_error');
			total_error = true;
		}

		var tmp_test_phone = valid_tel.replace(/[^\d]/g, '');

		if ( $.trim( tmp_test_phone ) != '' ){

			if ( tmp_test_phone.length != 11 ){
				$('#tel_have_questions').addClass('input_error');
				total_error = true;
			}
		}else{
			$('#tel_have_questions').addClass('input_error');
			total_error = true;
		}

		if ( $.trim(valid_msg) == '' ){
			$('#msg_have_questions').addClass('input_error');
			total_error = true;
		}

		if ( $('#check_choise').is(':checked') == false ){
			$('.home-contacts-checkbox label').addClass('input_error_chk_box');
			total_error = true;
		}

		if ( !total_error ){
			HaveQuestionSendAjaxForm('result_form', 'have_questions_contact_aj_form', '/webforms/send');
			return false;
		}else{
			$(".modal-order-a-call.zayavk .labelvalid").css("color","red");
		}
	})



});

function HaveQuestionSendAjaxForm(result_form, zayavk_aj_form, url) {
	$.ajax({
		url:     '/webforms/send',
		type:     "POST",
		dataType: "html",
		data: $("#"+zayavk_aj_form).serialize(),
		success: function(response_d) {

			var tmp_result = false;
			try {
				JSON.parse(response_d);
				tmp_result = JSON.parse(response_d);
			} catch (e) {
				tmp_result = false;
			}

			if (tmp_result && tmp_result.response == 'Captcha не пройдена!!!'){

				$('.err_msg_block').text('Ошибка капчи, обновите страницу');
				$('.err_msg_block').slideDown();

				return false;
			}

			$('.success-message.callback').addClass('active-ov-mod');

			setTimeout(function(){
				$('.success-message.callback').removeClass('active-ov-mod');
				$('#have_questions_contact_aj_form').trigger("reset");
			}, 2000);
		},
		error: function(response_d) {
			$('#result_form').html('Ошибка. Данные не отправлены.');
		}
	});
}

  function sendAjaxForm(result_form, aj_form, url) {
      $.ajax({
          url:     '/webforms/send',
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: $("#"+aj_form).serialize(),  // Сеарилизуем объект
          success: function(response) { //Данные отправлены успешно
          let res = $(response).find('.section_capt .container .row h1').text();

          if(res == "Сообщение отправлено") {

            $('.modal-order-a-call').removeClass('active-ov-mod');

            $('.success-message.callback').addClass('active-ov-mod');
          } else {
            console.log('no');
          }
          	// $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
      	},
      	error: function(response) { // Данные не отправлены
              $('#result_form').html('Ошибка. Данные не отправлены.');
      	}
   	});
  }


// отправка коммента

  function sendAjaxFormСom(result_form, contact_aj_form, url) {
      $.ajax({
          url:     '/webforms/send',
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: $("#"+contact_aj_form).serialize(),  // Сеарилизуем объект
          success: function(response) { //Данные отправлены успешно
          let res = $(response).find('.section_capt .container .row h1').text();

          if(res == "Сообщение отправлено") {

            $('.modal-order-a-call').removeClass('active-ov-mod');

            $('.success-message.contact').addClass('active-ov-mod');
          } else {
            console.log('no');
          }
          	// $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
      	},
      	error: function(response) { // Данные не отправлены
              $('#result_form').html('Ошибка. Данные не отправлены.');
      	}
   	});
  }


// Заказ чоп

function sendAjaxFormZak(result_form, chop_aj_form, url) {
    $.ajax({
        url:     '/webforms/send',
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+chop_aj_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        let res = $(response).find('.section_capt .container .row h1').text();

        if(res == "Сообщение отправлено") {

          $('.modal-order-a-call.chop').removeClass('active-ov-mod');

          $('.success-message.callback').addClass('active-ov-mod');
        } else {
          console.log('no');
        }
          // $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
      },
      error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
      }
  });
}



  function ZayavkSendAjaxFormСom(result_form, zayavk_aj_form, url) {
      $.ajax({
          url:     '/webforms/send',
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: $("#"+zayavk_aj_form).serialize(),  // Сеарилизуем объект
          success: function(response) { //Данные отправлены успешно
          let res = $(response).find('.section_capt .container .row h1').text();
          console.log(res);
          console.log('resresult');
          if(res == "Сообщение отправлено") {
            $('.modal-order-a-call.zayavk').removeClass('active-ov-mod');

            $('.success-message.callback').addClass('active-ov-mod');
          } else {
            console.log('no');
          }
          	// $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
      	},
      	error: function(response) { // Данные не отправлены
              $('#result_form').html('Ошибка. Данные не отправлены.');
      	}
   	});
  }

// Подставление выбранных услуг

$(".main-business-alarm-item").on( "click", function() {
    let text = $(this).text().trim();
    $('.ohrana-val-rod').val(text);
});

$(".main-business-alarm-btn").on( "click", function() {
    let text = $(this).text().trim();

    $('.ohrana-val-child').val(text);
});


})
