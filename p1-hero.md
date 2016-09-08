# The Hero Banner

## Creating the background image
- *index.html*:
  - Create a `<div>` with class `container-fluid` underneath our `nav` to wrap
  our hero banner section in. We use `.container-fluid` because it allows our
  content to span the width of the entire viewport, whilst also allowing it to
  resize to match the window size. Give this div the ID `hero`.
  - Download a relatively large image to serve as our background for this
  section (i.e. at least 1000x1000px). Save it in `css` with the filename
  `myImage.jpg`.
- *style.css*:
  - Add this:

	```
	#hero{
		overflow:hidden;
		background-image: url('myImage.jpg');
		min-height: 100vh;
		background-size: cover;
		background-attachment: fixed;
	}
	```

	- `overflow: hidden`: this will prevent the entire image from showing in the
  div.
  - `background-image: url('img/myImage.jpe')`: this will set the background of
  the entire div to be the image we choose. We use the `url()` to specify that
  we are using a URL to provide the image. _Note that the image URL is relative
  to `style.css`._
	- `min-height: 100vh`: min-height sets the minimum height of the div - in this
  case, we want the div to span 100 _vertical height_ units (100% of the
  vertical height of the window).
	- `background-size: cover`: this causes the background image to cover the
  entire div.
	- `background-attachment: fixed`: this causes the image to remain in a fixed
  position when we scroll.
  - This has caused the div to expand to the size of the entire window. If we
  resize the window, the div will remain at the height of the viewport.

## Adding a slogan
- *index.html*:
  - Create a .row inside of this container to hold our content.
  - Create a div with .col-md-5 and .col-md-offset-1:
    - `.col-md-5`: this creates a column of width 5.
    - `.col-md-offset-1`: this 'pushes' the column along by one grid unit.
    - This will divide our entire section in half.
  - Add a div inside the column, with a class called `dotPoints`.
    - We will use this class to style our slogan. Use an `<h1>` to write up a
    big heading like so: `<h1>This is our big slogan.</h1>`.
  - To create our dot points, we will use a `<ul>` element (unordered list).
  Each dot point will be represented as a `<li>` element (list item). Directly
  underneath our slogan we will add:

  ```
  <h2><ul>
	  <li>List element 1.</li>
	  <li>List element 2.</li>
	  <li>List element 3.</li>
  </ul></h2>
  ```

- *style.css*:
  - Add a rule for .dotPoints:

  ```
  .dotPoints{
	  margin-top: 30%;
	  color: #ffffff;
  }

  ```

    - `margin-top: 30%`: this will add a space of height 30% of the viewport
    size above the div, so that it appears centered when we open the page.
  - Add a rule for `h1` and `h2`, as follows:

	  ```
	  h1, .dotPoints h2{
		color: white;
		text-shadow: 0 2px 5px #000000;
	  }
	  ```

    - `color: white:` we know what this does.
	- `text-shadow: 0 2px 5px #000000`: this adds a shadow to the text:
	  - The first two numbers are the direction of the shadow.
	  - The third number is the size of the shadow.
	  - The fourth number is the colour of the shadow (we used black).
	- This will add a shadow and change the colour of every `<h1>` on the page,
  and all `<h2>`s inside our `.dotPoints`..
	- _Notice that we can apply our rule to both selectors, `h1` and
  `.dotPoints h2` by separating them with a comma._

## Adding a contact form
- *index.html*:
  - Add another .col-md-5 directly below the end of the first one - this will
  take up the rest of the width of the viewport.
  - Within this column, add a div with .panel and .formPanel:
    - `.panel`: produces a 'paper-like' effect within our div.
	- `.formPanel`: will be used to alter the behaviour of our panel.
  - Inside of our .panel, add a title for your form (use <h2> if you like), and
  add a structure similar to this:

	```
	<form>
		<div class="form-group">
			<!-- Put your form information here! -->
		</div>
		<div class="form-group">
			<!-- Put your form information here! -->
		</div>
		<div class="form-group">
			<!-- Put your form information here! -->
		</div>
	</form>
	```

  - Each .form-group wraps around an <input> and provides styling details.
	- Add an <input> into each .form-group. Input tags look like this:

	  `<input type="text" class="form-control" id="name">`

	  - `type="text"`: tells the browser we want to use a text field.
	  - `class="form-control"`: a Bootstrap class used to style the form.
	  - `id="name"`: tells the browser that this field will contain a user's
	  name - ensure that the IDs for each field are different.
	- To each input, we can add a label, describing what the input is for, like
  so: `<label for="phone">Phone</label>`. *Note that the `for` attribute is set
  to the ID of the element the label is for.*
	- To add a submit button to the form, add, outside of a `.form-group`:

	  `<button type="submit">Done!</button>`

	  - Notice the button _also_ has a 'type' attribute, used to tell the browser
    that it will be used to submit the form.
- *style.css*:
  - Notice that without any CSS styling, the panel border is very close to the
  form: we can fix this by adding this to our style:

	```
	.panel{
		padding: 25px;
	}
	```

	- `padding: 25px`: adds 25px of space around the _inside_ of the element.
  - We also notice that the form is pushed all the way to the top of the screen.
    We can move it down by adding:

  ```
  .formPanel{
		margin-top: 30%;
  }
  ```

  - This is probably self-explanatory.
