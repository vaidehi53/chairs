
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

	$('.bxslider').bxSlider();

});

var app = angular.module('myapp', []);

app.controller('mycontrol', function($scope){
	var chairs =[
	{ label: "Office chairs", show: ".ul1"},
	{ label: "Kids chairs", show: ".ul2"},
	{ label: "Woods chairs", show: ".ul3"}
	 ];
 	$scope.chairs=chairs;
 	
});


$(document).ready(function(){
	$(".cats ul").hide();
	$("select").on('change', function(){
		//debugger;
		var target = $(this).data('target');
		var show = $("option:selected").data('show');
		$(target).children().hide();
		$(show).show();
	});
	

}); 


