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


    //For YouTube player.
    $('.youtube-player').hide();

    var youtube_open = false;

    $('.youtube-btn').each(function(i, obj) {
        var video_id = this.id;

        $(obj).find('.youtube-img').attr("src", thumbnail('big', video_id));

        $(obj).click(function(event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('#mediaSection').offset().top
            }, 1000);

            if(youtube_open == false) {
                addYoutube(video_id);
                $('.youtube-player').show("slow");
            } else {
                if($('.youtube-player').id != video_id){
                    $('.youtube-player').hide("slow", removeAndStart);
                    function removeAndStart() {
                        $('.youtube-player').html("");
                        addYoutube(video_id);
                        $('.youtube-player').show("slow");
                    }
                } else {
                    $('.youtube-player').hide("slow", removeYoutube);
                }
            }
        });

    });

    function thumbnail(size, video_id) {
        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + video_id + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + video_id + '/0.jpg';
    };

    function addYoutube(video_id) {
        youtube_open = true;
        $('.youtube-player').html('<iframe width="420" height="315" src="https://www.youtube.com/embed/'+ video_id +'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        $('.youtube-player').attr('id', video_id);
    }

    function removeYoutube() {
        youtube_open = false;
        $('.youtube-player').html("");
        $('.youtube-player').removeAttr('id');
    }

    //End YouTube
});

$(".fadeScroll").scrollfire({
  offset: 0,
  topOffset: 150,
  bottomOffset: 150,
  onScroll: function(elm){ $(elm).animate({opacity: 1.0}, 1500); }
});




/* Image Gallery Start */
$(document).ready(function(){

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }
});
/* Image Gallery End */
