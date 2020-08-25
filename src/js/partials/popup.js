$(document).ready(function () {
	popupInit($('.ask-question-link'));
});

function popupInit(el) {
	el.fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		},
		btnTpl : {
			smallBtn : '<div data-fancybox-close class="popup-consult__close"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
			'<path d="M20.5644 3.6302e-07L22 1.43554L1.43553 22L0 20.5645L20.5644 3.6302e-07Z" fill="white"/>\n' +
			'<path d="M4.16857e-05 1.43554L1.43558 0L22 20.5645L20.5645 22L4.16857e-05 1.43554Z" fill="white"/>\n' +
			'</svg>\n</div>'
		}
	});
}