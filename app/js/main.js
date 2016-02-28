



$(document).ready(function() {
	console.log("ready");


	// Категория телефонов	
	$('.phone-category-link').on('click', function(e) {
		var category = $('.phone-category-link-active');
		e.preventDefault();
		category.removeClass('phone-category-link-active');
		$(this).addClass('phone-category-link-active');
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
	  	var content = $(this).siblings('.acco-content');

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
	  		// allinput.removeAttr('checked');
	  	}

	});

	// Сброс инпутов
  	$('.reset-filter').on('click', function(e) {
  		e.preventDefault();
      console.log('wwh');
  		parent = $(this).closest('ul.acco-content');
  		var allinput = parent.find('input:checkbox');
  		allinput.removeAttr('checked');
  	});

  	// Селект
  	$('.select').select2({
  		minimumResultsForSearch: Infinity
  	});


  	// Колонки
  	$('.column-text').columnize({ 
  		width: 500 
  	});

  	
  	// Слайдер картинок
  	$('.products-slideshow-link').on('click', function(e) {
  		e.preventDefault();

  		var img = $(this).find('img');
  		var img_src = $(img).attr('src');
  		var display = $(this).closest('div.products-slideshow-block').find('img.products-slideshow-img');

  		display.attr('src',img_src);

  		var all_link = $(this).closest('div.products-slideshow-block')
  			.find('a.products-slideshow-link-active');
  		
  		all_link.removeClass('products-slideshow-link-active');

  		$(this).addClass('products-slideshow-link-active');
  		
  	});

  	// Смена вида товаров
  	$(".sort-content-link").on('click', function(e) {
  		e.preventDefault();

  		
  		var prod = $('.products-list');
  		var icon = $(this).find('i');
		var icon_active = $(this).closest('ul.sort-content').find('i.active');

		icon_active.removeClass('active');
		
  		icon.addClass('active');

  		prod.attr('class','products-list');

  		if ($(icon).hasClass('icon-grid')) {
  			console.log('grid');
  			prod.addClass('products-list-grid');
  		}
  		else
  			if ($(icon).hasClass('icon-line')) {
  				console.log('line');
  				prod.addClass('products-list-line');
  			};

  	});

  	



});