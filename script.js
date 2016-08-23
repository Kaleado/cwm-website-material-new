var currentSection = 0;
var maxSections = 3;

function moveToSection() {
  var scrollTime = 500;
  if(currentSection == 0) {
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
  if(currentSection == 3) {
    $('html, body').animate({scrollTop: $("#testimonialsSection").offset().top}, scrollTime);
    return;
  }
  if ( currentSection > maxSections ) { currentSection = maxSections; }
  if ( currentSection < 0 ) { currentSection = 0; }
}

$(document).ready(function() {
    
    //For YouTube player.
    $("#youtube-player").hide();
    
    var youtube_open = false;
    var youtube_video_id = "zPlErSZbNE8";

    $("#youtube-img").attr("src", thumbnail('big'));

    function thumbnail(size) {
        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + youtube_video_id + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + youtube_video_id + '/0.jpg';
    };
    
    $("#youtube-btn").click(function(event) {
        event.preventDefault();
        
        if(youtube_open == false) {
            addYoutube();
            $("#youtube-player").show("slow");
            youtube_open = true;
        } else {
            $("#youtube-player").hide("slow", removeYoutube);
            youtube_open = false;
        }
        
    }); 

    function addYoutube() {
        document.getElementById('youtube-player').innerHTML = '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+ youtube_video_id +'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    }
    
    function removeYoutube() {
        document.getElementById('youtube-player').innerHTML = "";
    }
    
    //End YouTube
    $('[data-toggle="tooltip"]').tooltip();
    //Show the main signup panel and slogan upon opening the page.
    $(".formPanel").animate({left: 0, opacity: 1.0}, 1000);
    $(".dotPoints").animate({right: 0, opacity: 1.0}, 1000);

    //Scroll the section selection buttons in and out of view.
    $(window).scroll(function(){
      var distanceScrolled = $(window).scrollTop();
      currentSection = Math.floor(distanceScrolled / ($(window).height()-150));
      if ( currentSection  == 0 ) {
        $("#pageNav").fadeIn();
      } else {
        $("#pageNav").fadeOut()
      }
    });

    /* Smooth Scroll */
    $('#navbar a').click(function() {
      var target = $(this.hash); /* $(this.hash); reads the href attribute of the URL so that it knows where to scroll us to. */
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
  });

});

$(".fadeScroll").scrollfire({
  offset: 0,
  topOffset: 150,
  bottomOffset: 150,
  onScroll: function(elm){ $(elm).animate({opacity: 1.0}, 1500); }
});
