var currentSection = 0;
var maxSections = 2;

function moveToSection(){
    var scrollTime = 500;
    if(currentSection == 0){
	$('html, body').animate({scrollTop: $("#hero").offset().top}, scrollTime);
	return;
    }
    if(currentSection == 1){
	$('html, body').animate({scrollTop: $("#values").offset().top}, scrollTime);
	return;
    }
    if(currentSection == 2){
	$('html, body').animate({scrollTop: $("#team").offset().top}, scrollTime);
	return;
    }
    if(currentSection > maxSections){currentSection = maxSections;}
    if(currentSection < 0){currentSection = 0;}
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    //Show the main signup panel and slogan upon opening the page.
    $(".formPanel").animate({left: 0, opacity: 1.0}, 1000);
    $(".dotPoints").animate({right: 0, opacity: 1.0}, 1000);
    
    //Scroll the section selection buttons in and out of view.
    $(window).scroll(function(){
	var distanceScrolled = $(window).scrollTop();
	currentSection = Math.floor(distanceScrolled / ($(window).height()-150));
	if(distanceScrolled == 0){
	    $("#upButton").animate({top: -70}, 10);
	    $("#pageNav").fadeIn();
	}
	else {
	    $("#upButton").animate({top: 25}, 10);
	    $("#pageNav").fadeOut()
	}
    });
    
    $("#upButton").click(function(){
	console.log(currentSection);
	currentSection--;
	moveToSection();
    });
    $("#downButton").click(function(){
	console.log(currentSection);
	currentSection++;
	moveToSection();
    });
    
});

$(".fadeScroll").scrollfire({
    offset: 0,
    topOffset: 150,
    bottomOffset: 150,
    onScroll: function(elm){
	$(elm).animate({opacity: 1.0}, 1500);
    }
});
