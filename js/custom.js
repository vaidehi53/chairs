
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
	var chairs =["Office chairs", "Kids chairs", "Woods chairs"];
 	$scope.chairs=chairs;

 	// var js_option = $scope.chairs.value;

});


$(document).ready(function(){
	// var js_option = $("#js-select option").value;
//debugger;
	// alert(js_option);

	$("#js-select").on("click", function(){
		
	});

}); 


