$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");

		$('#fullpage').fullpage({
			//options here
			autoScrolling:true,
			//sectionsColor : [ 'red' ,  '#fff' , 'green', 'black', 'blue', 'yellow', 'cyan'] ,
			//slidesNavigation: true,
			scrollHorizontally: true,
			anchors: ['home', 'mission', 'products', 'contacts']
		});

/*
	new fullpage('#fullpage', {
		sectionsColor: ['yellow', 'orange']
	 });*/
});

