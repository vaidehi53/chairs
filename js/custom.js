
$(document).ready(function(){
	//alert("sfdf");	
	var viewportwidth = $(window).width();
	var viewportheight = $(window).height();
	$(".bg-main").width(viewportwidth);
	$(".bg-main").height(viewportheight);

	$(window).resize(function(){
		//alert("sd");
		var viewportwidth = $(window).width();
		var viewportheight = $(window).height();
		$(".bg-main").width(viewportwidth);
		$(".bg-main").height(viewportheight);
	});

});
