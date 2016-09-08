# The Testimonials Section

- In this section, we will be covering:
  - Tooltips.
  - More transitions.
- In this section, our page will be segmented into two halves: a top banner, and
  a bottom formation of three columns, corresponding to three testimonials.
- Each testimonial will consist of an image, accompanied by a block of text.
- We will also add our fade-in transition to each testimonial.
- Let's start with the banner.

## The Testimonials Banner

- Once again, we will need a large image, named `testimonials.jpg`, saved in
CSS.

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
    background: url('testimonials.jpg') fixed;
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
    <!-- Our testimonials will go here! -->
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
  ```

  - One small and possibly confusing detail is what we have done with the `<hr>`
  in our CSS: we have added `border-top: 1px solid #cccccc`: this is to alter the
  colour of the horizontal rule.
  - Other properties are simply used to alter spacing.
  - You can duplicate this testimonial block three times to fill in your
  testimonials section!
