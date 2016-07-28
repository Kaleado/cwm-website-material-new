$(document).ready(function(){
    //Show the main signup panel and slogan upon opening the page.
    $(".formPanel").animate({left: 0, opacity: 1.0}, 1000);
    $(".dotPoints").animate({right: 0, opacity: 1.0}, 1000);
    
    //Scroll the section selection buttons in and out of view.
    $(window).scroll(function(){
	var distanceScrolled = $(window).scrollTop();
	if(distanceScrolled == 0){
	    $("#upButton").animate({top: -20}, 10);
	}
	else {
	    $("#upButton").animate({top: 90}, 10);
	}
    });
});
