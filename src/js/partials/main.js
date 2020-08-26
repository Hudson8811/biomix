$(document).keyup(function(e) {
	console.log( e.keyCode);
	if (e.key === "ArrowDown" || e.keyCode === 40) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('wheel', true, true);
		evt.deltaY = +120;
		document.dispatchEvent(evt);
	}
	if (e.key === "ArrowUp" || e.keyCode === 38) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('wheel', true, true);
		evt.deltaY = -120;
		document.dispatchEvent(evt);
	}
});

var productsMenu,
	headerPhonePath,
	headerCPT, //.contact-phone__text
	copyrightBlk,
	copyrightText;

function initFullPage() {
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
			var activeSlide = fullpage_api.getActiveSlide();
			if (!activeSlide) {
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
			} else {

				var newSlide = $(activeSlide['item']);


				if (newSlide.attr('data-product') === "true") {
					$('.control-products-item[data-slide-anchor="' + activeSlide['anchor'] + '"]').addClass('control-products-item--active').siblings().removeClass('control-products-item--active');
				}

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

				control.find('svg path').css('fill', newSlide.attr('data-item-color'));
				productsMenu.css('background', newSlide.attr('data-item-color'));

			}

		},
		afterSlideLoad: function (section, origin, destination, direction) { //смена слайда
			/*console.log(section);
			console.log(origin);
			console.log(destination);
			console.log(direction);*/
			//console.log('afterSlideLoad');

			var newSlide = $(destination['item']);


			if (newSlide.attr('data-product') === "true") {
				$('.control-products-item[data-slide-anchor="' + destination['anchor'] + '"]').addClass('control-products-item--active').siblings().removeClass('control-products-item--active');
			}

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

			control.find('svg path').css('fill', newSlide.attr('data-item-color'));
			productsMenu.css('background', newSlide.attr('data-item-color'));

		}
	});

	$('.js-mission-prev-slide').click(function () {
		fullpage_api.moveSlideLeft();
	});
	$('.js-mission-next-slide').click(function () {
		fullpage_api.moveSlideRight();
	});
}

function changeMissionBg() {
	$.each($('.mission-bottom-wrap'), function () {
		$(this).css('background-color', $(this).parent().parent('.fp-slide').attr('data-item-color'));
	});
}

function initSlider() {
	$('.fp-section[data-section-control-id="mission-control"]').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		prevArrow: $('.js-mission-prev-slide'),
		nextArrow: $('.js-mission-next-slide')
	});
}

function initAccordion() {
	$('.fp-tab').click(function () {
		$(this).next().slideToggle(300);
		$(this).toggleClass('fp-tab--active');
	});
}


$(document).ready(function () {
	$("input[name='phone']").mask(" +7 (999) 999-99-99");
	productsMenu = $('.control-products-menu');
	headerPhonePath = $('#header-phone .contact-phone__desktop-pic path');
	headerCPT = $('#header-phone .contact-phone__text');
	copyrightBlk = $('#copyright');
	copyrightText = $('#copyright .copyright');

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



	if (window.matchMedia("(min-width: 908px) and (min-height: 500px)").matches) {
		initFullPage();
	} else {
		changeMissionBg();
		initSlider();
		initAccordion();
	}

	$(window).resize(function () {
		if (window.matchMedia("(min-width: 908px) and (min-height: 500px)").matches) {
			if ((!$('#fullpage').hasClass('fullpage-wrapper')) || $('#fullpage').hasClass('fp-destroyed')) {
				initFullPage();
			}
		} else {
			if ($('#fullpage').hasClass('fullpage-wrapper') || (!$('#fullpage').hasClass('fp-destroyed'))) {
				fullpage_api.destroy('all');
				$('.js-fp-slide').addClass('fp-slide');
				$('.js-fp-section').addClass('fp-section');
			}
		}
	})

});