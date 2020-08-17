var productsMenu,
	headerPhonePath,
	headerCPT, //.contact-phone__text
	copyrightBlk,
	copyrightText;


$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");
	productsMenu = $('.control-products-menu');
	headerPhonePath = $('#header-phone .contact-phone__desktop-pic path');
	headerCPT = $('#header-phone .contact-phone__text');
	copyrightBlk = $('#copyright');
	copyrightText = $('#copyright .copyright');

	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		//sectionsColor : [ 'red' ,  '#fff' , 'green', 'black', 'blue', 'yellow', 'cyan'] ,
		//slidesNavigation: true,
		scrollHorizontally: true,
		anchors: ['home', 'mission', 'products', 'contacts'],
		controlArrows: false,
		keyboardScrolling: false,
		sectionSelector: '.fp-section',
		slideSelector: '.fp-slide',
		afterLoad: function (origin, destination, direction) { //переход между секциями
			/*console.log(origin);
			console.log(destination);
			console.log(direction);*/
			if (destination['anchor'] === 'products') {
				productsMenu.addClass('control-products-menu--active');

			} else {
				productsMenu.removeClass('control-products-menu--active');
			}







			var newSection = $(destination['item']);

			var control = $('#' + newSection.attr('data-section-control-id'));
			control.addClass('control-main-item--active')
				.siblings().removeClass('control-main-item--active');

			if (!fullpage_api.getActiveSlide()) {
				var newSection = $(destination['item']);

				if (newSection.attr('data-copyright-white-bg') && newSection.attr('data-copyright-white-bg') === "true") {
					copyrightBlk.addClass('copyright-block--bgw');
				} else {
					copyrightBlk.removeClass('copyright-block--bgw');
				}
				copyrightText.css('color', newSection.attr('data-copyright-color'));
				headerPhonePath.css('fill', newSection.attr('data-phone-color'));
				headerCPT.css('color', newSection.attr('data-phone-color'));
				control.find('svg path').css('fill', newSection.attr('data-item-color'));
				//console.log(newSection.attr('data-item-color'));
			}

		},
		afterSlideLoad: function (section, origin, destination, direction) { //смена слайда
			/*console.log(section);
			console.log(origin);
			console.log(destination);
			console.log(direction);*/

			var newSlide = $(destination['item']);



			if (newSlide.attr('data-copyright-white-bg') && newSlide.attr('data-copyright-white-bg') === "true") {
				copyrightBlk.addClass('copyright-block--bgw');
			} else {
				copyrightBlk.removeClass('copyright-block--bgw');
			}
			copyrightText.css('color', newSlide.attr('data-copyright-color'));
			headerPhonePath.css('fill', newSlide.attr('data-phone-color'));
			headerCPT.css('color', newSlide.attr('data-phone-color'));

			var control = $('#' + newSlide.closest('.fp-section').attr('data-section-control-id'));
			control.addClass('control-main-item--active').siblings('.control-main-item').removeClass('control-main-item--active');
			console.log(control
				.siblings('.control-main-item').length);
			control.find('svg path').css('fill', newSlide.attr('data-item-color'));

		}
	});
	$('.js-change-section').click(function () {
		//переход к секции
		var slide = 0;
		if ($(this).attr('data-slide-anchor')) {
			slide = $(this).attr('data-slide-anchor');
		}
		fullpage_api.moveTo($(this).attr('data-section'), slide);
	});
	/*
		new fullpage('#fullpage', {
			sectionsColor: ['yellow', 'orange']
		 });*/
});