# The Team Section

- In this section, we will be covering:
  - ScrollFire.
  - Responsive images.
  - Centering images in Bootstrap.
- This section will be segmented into two halves: a large banner heading to the
left, and a set of team profiles to the right. When we resize the page, the
banner will relocate above the team member profiles. The images will also
dynamically resize to fit the window size as well.
- Download another large image for our banner - name it `team.jpg`, and save it
in `css`.

## The Team Banner

- *index.html*:
  - As usual, we add our `<div>` to wrap our entire section in.

  ```
  <div id="team">
	  <!-- Our team section will be going here. -->
  </div>
  ```

  - We also add a half screen-spanning column inside our div. Also note that we use
  `.col-xs-12` to ensure that the banner heading will stretch to fill the screen on
  smaller displays:

  ```
  <div class="col-xs-12 col-md-6 text-center teamHeading">
	  <h1>Meet Our Team</h1>
	  <h2 class="text-primary">Subheading</h2>
	  <div class="teamSlogan">
		<p>We have assembled a team with over twenty years of experience, dedicated to offering you the best service possible.</p>
	  </div>
  </div>
  ```

  - `teamHeading`: this is added so that we can ensure that the banner heading will
  fill the left side of the screen, as well as to add a background image (see below).

- *style.css*:
  - We want our team section to span an entire screen height, so we add:

  ```
  #team {
      min-height: 100vh;
  }
  ```

  - Note that we have used `#team` rather than `.team` - this is so that we apply
  the rule to elements with the ID 'team', rather than those with the class 'team'.
  - We also use the following CSS:

  ```
  .teamHeading{
    padding-top: 30vh;
	  min-height: 100vh;
	  background: url('team.jpg') fixed;
	  background-size: cover;
  }
  ```

  - `padding-top`: we use this property to push the entire heading section down one
  third of the screen height.
  - `min-height`: this property sets the _minimum_ height of the parent element (in this
  case, the div). This means that the section is still free to expand beyond 100vh.
  - The other two rules are similar to what we did in the hero section.
  - We also add:

  ```
  .teamSlogan{
	  color: #fff;
	  width: 30vh;
	  align: center;
	  margin: auto;
  }
  ```

  - Should be largely self-explanatory.

## The Team Descriptions
- *index.html*:
  - We make another column next to the first one to fit our team descriptions:

  ```
  <div class="col-xs-12 col-md-6 teamDescription">
	  <!-- Our team descriptions will go here. -->
  </div>
  ```

  - Note once again that we are using a column spanning 6 columns on mid-size displays,
  and a column spanning a full 12 columns on extra small displays.
  - `teamDescription` will be used to add padding, adjust the height of the div, and
  add a light grey background colour (see below).
  - We will show you how to build one team member profile - they may be copied multiple
  times for multiple team members.
  - The code for one team member profile:

  ```
  <div class="row teamEntry">
	  <div class="hidden-md col-xs-4">
		<img class="img-responsive img-thumbnail" src="https://placehold.it/270x270">
	  </div>
	  <div class="col-md-12 col-xs-8 col-lg-8">
		<h3 class="text-primary memberName">Your Name</h3>
		<hr>
		<p>Your profile here!</p>
   </div>
  </div>
  ```

  - `.img-responsive`: causes an image to flexibly change size when the div it resides
  in changes size (this usually happens when the window is resized).
  - `.img-thumbnail`: adds a white border around the image. Similar classes include (might
  want to demonstrate these):
	  - `.img-circle`: displays a circular border around the image.
	  - `.img-rounded`: maintains the aspect ratio of the image, whilst rounding the edges.
  - `.hidden-md`: causes the div to be hidden on mid-size and up.
  - `.text-primary`: causes the text to be displayed in blue - we can use...
	- ...`.text-success` for green.
	- ...`.text-warning` for orange.
	- ...`.text-danger` for red.
	- ...`.text-success` for green.
	- ...`.text-muted` for grey.
	- ...`.text-info` for teal.
	- ...CSS for any other colour we like.
  - We will use `memberName` to adjust the team member name.
- *style.css*:
  - We add our definition for the `memberName` rule:

  ```
  .memberName{
	  font-size: xx-large;
	  text-transform: uppercase;
	  line-height: 0px;
	  margin-bottom: 25px;
  }
  ```

  - `line-height`: used to adjust the space between each line of text of the `h3` - setting this
  to zero ensure that no gap is left above and below the `h3`.

## ScrollFire

- Adding ScrollFire:
  - ScrollFire is a jQuery library that allows the page to react to the user
  scrolling past elements.
  - Download ScrollFire from https://plugins.jquery.com/scrollfire/
  - Extract the archive, and copy `jquery.scrollfire.min.js` to the same directory
  that your `index.html` is in.
  - Add this to the _end_ of your `index.html`: `<script src="jquery.scrollfire.js"></script>`.
  - We do this to ensure that the page loads quickly (since HTML pages are loaded in order).
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
  they are scrolled past - try adding them to each `teamEntry`.
