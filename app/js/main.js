$(document).ready(function() {
	console.log("ready");


	// Категория телефонов	
	$('.phone-category_link').on('click', function(e) {
		var category = $('.phone-category_link_active');
		e.preventDefault();
		category.removeClass('phone-category_link_active');
		$(this).addClass('phone-category_link_active');
	});

	// Цвет телефона
	$('.color-item').on('click', function(e) {
		var color = $('.color-item-active');
		e.preventDefault();
		color.removeClass('color-item-active');
		$(this).addClass('color-item-active');
	});


	// Выбо цены
	$("#slider").slider({

	    min: 0,
	    max: 40000,
	    values: [2500,15000],
	    range: true,

	    stop: function(event, ui) {
	        $("input#min").val($("#slider").slider("values",0));
	        $("input#max").val($("#slider").slider("values",1));
    	},

   		slide: function(event, ui){
	        $("input#min").val($("#slider").slider("values",0));
	        $("input#max").val($("#slider").slider("values",1));
    	}

	});
		

      // Тугле выбор характеристик
	$(".acco-trigger").click(function(e){
		e.preventDefault();
	  	console.log('click');
	  	var content = $(this).siblings('.acco__content');

	  	var allinput = $(content).find('input:checkbox');
	  	

	  	if (content.css('display') !== 'block' ) {
	  		$(this).removeClass('togle-down');
	  		$(this).addClass('togle-up');
	  		content.slideDown();
	  	}
	  	else{
	  		$(this).removeClass('togle-up');
	  		$(this).addClass('togle-down');
	  		content.slideUp();
	  		allinput.removeAttr('checked');
	  	}

	});

	// Сброс инпутов
  	$('.reset-filter').on('click', function(e) {
  		e.preventDefault();
  		parent = $(this).parent();
  		var allinput = $(this).parent().find('input:checkbox');
  		allinput.removeAttr('checked');
  	});



	
});