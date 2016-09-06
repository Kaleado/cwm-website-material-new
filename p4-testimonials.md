# The Testimonials Section

- In this section, we will be covering:
  - Tooltips.
  - More transitions.
  - Responsive images.
  - Centering images in Bootstrap.
  - ScrollFire.
- In this section, our page will be segmented into two halves: a top banner, and
  a bottom formation of three columns, corresponding to three testimonials.
- Each testimonial will consist of an image, accompanied by a block of text.
- We will even add a transition to each testimonial!
- Let's start with the banner.

## The Testimonials Banner

- *index.html*:
  - We first create our wrapping `<div id="testimonials">`.
  - Our banner heading is quite simple:

  ```
  <div class="row">
    <div class="clientsBanner text-center col-xs-12">
      <h1>Testimonials</h1>
      <p>We are dedicated to our clients. Here are just a few of them.</p>
    </div>
  </div>
  ```

  - This is nothing we haven't seen before: we've got a custom `.clientsBanner` class
  for styling, as well as:
    - `.text-center`: for centering the text within our div.
    - `col-xs-12`: for making the row content span the entire width of the window.

- *style.css*:
  - Add this:

  ```
  .clientsBanner{
    padding-top: 4vh;
    background: url('img/clients.jpe') fixed;
    min-height: 33vh;
    background-size: cover;
    color: #fff;
  }
  ```

  - Notice we added `color: #fff` - we do this to ensure that the subtitle of
  the banner is white, rather than grey.
  - Also notice `background: url('img/clients.jpe') fixed;` - we can append 'fixed'
  to our property to set the background-attachment to fixed.

## The Testimonials Themselves

### The Testimonial Images
- In this section we will detail the creation of _one_ testimonial - the others are
produced in the same way.
- *index.html*:
  - We must first wrap all of our testimonials inside their own `.row`:

  ```
  <div class="row clientsContent">
    <!-- our testimonials will go here! -->
  </div>
  ```

  - Notice the `.clientsContent`: we will use this to adjust the padding around our
  testimonials.
  - We add the image to our testimonials by adding:

  ```
  <div class="col-xs-12 col-md-4">
    <div class="row">
      <div class=" col-xs-12">
        <img class="center-block img-responsive img-circle clientImage" src="https://placehold.it/270x270">
      </div>
    </div>
    <!-- We will insert our text here -->
  </div>
  ```

  - `.center-block`: this class is provided by Bootstrap, and is ushttps://www.youtube.com/watch?v=JHcyVXq8GUwed to center
  an image - note that we can't use `.center-text` to achieve this.
  - `.img-responsive`: causes an image to flexibly change size when the div it resides
  in changes size (this usually happens when the window is resized).
  - `.img-circle`: this allows us to display a circular border around the image.
  Similar classes include (might want to demonstrate these):
    - `.img-thumbnail`: adds a white border around the image.
    - `.img-rounded`: maintains the aspect ratio of the image, whilst rounding the edges.

- *style.css*:
  - We add:

  ```
  .clientsContent{
    padding: 50px 100px;
    min-height: 67vh;
    background: rgba(240, 240, 240, 1);
  }
  ```

  - For the images, we add:

  ```
  .clientImage{
    margin-bottom: 25px;
  }
  ```

    - If we wanted the images to remain at a fixed size, we could add `width: 200px`
    and `height: 200px` to force the image to remain at 200px in width and height.

### The Testimonial Text

- *index.html*:
  - The testimonial text HTML is inserted underneath the image row:

  ```
  <div class="row">
    <div class="col-xs-12 testimonial">
      <h3 class="text-center testimonialHeading">Company Name</h3>
      <hr>
      <blockquote>
        Insert your testimonial text here!
      </blockquote>
    </div>
  </div>
  ```

  - `<blockquote>`: this element is used to denote quotes - its use here is mostly
  for aesthetic purposes.
- *style.css*:
  - We add:

  ```
  .testimonialHeading{
      text-transform: uppercase;
  }

  hr {
      border-top: 1px solid #cccccc;
      margin-top: 0px;
  }

  .testimonial {
    margin: 0px 50px;
  }  
  ```

  - One small and possibly confusing detail is what we have done with the `<hr>`
  in our CSS: we have added `border-top 1px solid #cccccc`: this is to alter the
  colour of the horizontal rule.
  - Other properties are simply used to alter spacing.
  - You can duplicate this testimonial block three times to fill in your
  testimonials section!

## Putting It Together and Adding Effects

- Adding ScrollFire:
  - ScrollFire is a jQuery library that allows the page to react to the user
  scrolling past elements.
  - Download ScrollFire from https://plugins.jquery.com/scrollfire/
  - Extract the archive, and copy `jquery.scrollfire.min.js` to the same directory
  that you `index.html` is in.
  - Add this to the _end_ of your `index.html`: `<script src="jquery.scrollfire.js"></script>`.
- Using ScrollFire to add a transition to a div:
  - We can now use the ScrollFire library to attach effects to our elements.
  - In this example, we will be attaching a fade-in effect to elements with the
  `.fadeScroll` class.
  - *script.js*:

  ```
  $(".fadeScroll").scrollfire({
    offset: 0,
    topOffset: 150,
    bottomOffset: 150,
    onScroll: function(elm){ $(elm).animate({opacity: 1.0}, 1500); }
  });
  ```

  - Explanation:
    - The `$(".fadeScroll").scrollfire()` function sets up the ScrollFire
    library for use on elements with the `.fadeScroll` class.
    - We pass this function an object with the properties:
      - `offset: 150`: this adjusts the amount of 'leeway' between seeing the element
      on screen at the top and/or bottom, and triggering the ScrollFire event.
      - `topOffset: 0`: as above, but only for the top of the screen.
      - `bottomOffset: 0`: as above, but only for the bottom of the screen.
      - `onScroll: function(elm){ $(elm).animate({opacity: 1.0}, 1500); }`: this
      allows us to attach a function to run when the element is scrolled past. Within
      this function, we also use the jQuery `animate` function - this function
      is used to add animations to elements - in particular, we use this function
      to animate the element's `opacity` property to 1.0 (i.e. full opacity), over
      a period of 1500ms.
    - Doing all of this adds the necessary behaviour to the elements, but our
    transition doesn't seem to work - we need to adjust our `style.css` to
    set the opacity of the `.fadeScroll` elements to 0.
  - *style.css*

  ```
  .fadeScroll{
    opacity: 0;
  }
  ```

  - This class can now be used to make elements fade in from transparency when
  they are scrolled past.
