
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
<<<<<<< HEAD
	var chairs =[
	{ label: "Office chairs", show: ".ul1"},
	{ label: "Kids chairs", show: ".ul2"},
	{ label: "Woods chairs", show: ".ul3"}
	 ];
 	$scope.chairs=chairs;
 	
=======
//	var chairs =["Office chairs", "Kids chairs", "Woods chairs"];
// 	$scope.chairs=chairs;
	
	var box = [{id:1, title:"Office chairs", data: ".ul1"},
			   {id:2, title:"Kids chairs", data: ".ul2"},
			   {id:3, title:"Woods chairs", data: ".ul3"}
			   ];
	$scope.box=box;

>>>>>>> 24b99382f09e3ddf30cddedb34eaa3df3259c20c
});


$(document).ready(function(){
<<<<<<< HEAD
	$(".cats ul").hide();
	$("select").on('change', function(){
		//debugger;
		var target = $(this).data('target');
		var show = $("option:selected").data('show');
		$(target).children().hide();
		$(show).show();
=======

	$(".cats ul").hide();
	$("select.div-toggle").on('change', function(){
												 	debugger;

		var target = $(this).data("target");
		var show = $("option:selected").data("show");
		$(".cats").children().hide();
		$(show).show();
		
>>>>>>> 24b99382f09e3ddf30cddedb34eaa3df3259c20c
	});
	

}); 




















