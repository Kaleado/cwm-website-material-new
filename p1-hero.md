# The Hero Banner

## Creating the background image
- *index.html*:
  - Create a .container-fluid to wrap your section in. We use a .container-fluid
    because it allows our content to span the width of the entire viewport, whilst also
    allowing it to resize to match the window size. Give this div the ID "hero".
- *style.css*:
  - Add this:

	```
	#hero{
		overflow:hidden;
		background-image: url('img/download.jpe');
		min-height: 100vh;
		background-size: cover;
		background-attachment: fixed;
	}
	```

	- `overflow: hidden`: this will prevent the entire image from showing in the div.
  - `background-image: url('img/myImage.jpe')`: this will set the background of the
	   entire div to be the image we choose. We use the `url()` to specify that we are
	   using a URL to provide the image.
	- `min-height: 100vh`: min-height sets the minimum height of the div - in this case,
	   we want the div to span 100 _vertical height_ units (100% of
     the vertical height of the window).
	- `background-size: cover`: this causes the background image to cover the entire div.
	- `background-attachment: fixed`: this causes the image to remain in a fixed position
	  when we scroll.
  - This has caused the div to expand to the size of the entire window.
    If we resize the window, the div will remain at the height of the viewport.

## Adding a slogan
- *index.html*:
  - Create a .row inside of this container to hold our content.
  - Create a div with .col-md-5 and .col-md-offset-1:
    - `.col-md-5`: this creates a column of width 5.
    - `.col-md-offset-1`: this 'pushes' the column along by one grid unit.
    - This will divide our entire section in half.
  - Add a div inside the column, with a class called `dotPoints`.
    - We will use this class to style our slogan. Use an <h1>
- *style.css*:
  - Add a rule for .dotPoints, including:
    - `margin-top: 30%`: this will add a space of height 30% of the viewport size above
      the div, so that it appears centered when we open the page.
  - Add a rule for h1, as follows:

	  ```
	  h1{
		color: white;
		text-shadow: 0 2px 5px #000000;
	  }
	  ```

    - `color: white:` we know what this does.
	- `text-shadow: 0 2px 5px #000000`: this adds a shadow to the text:
	  - The first two numbers are the direction of the shadow.
	  - The third number is the size of the shadow.
	  - The fourth number is the colour of the shadow (we used black).
	- This will add a shadow and change the colour of every <h1> we use.

## Adding a contact form
- *index.html*:
  - Add another .col-md-5 directly below the end of the first one - this will take up
    the rest of the width of the viewport.
  - Within this column, add a div with .panel and .formPanel:
    - `.panel`: produces a 'paper-like' effect within our div.
	- `.formPanel`: will be used to alter the behaviour of our panel.
  - Inside of our .panel, add a title for your form (use <h2> if you like),
    and add a structure similar to this:

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

	  `<input type="text" class="form-control">`

	  - `type="text"`: tells the browser we want to use a text field.
	  - `class="form-control"`: a Bootstrap class used to style the form.
	- To add a submit button to the form, add:

	  `<button type="submit">Done!</button>`

	  - Notice the button _also_ has a 'type' attribute, used to tell the browser that
	  it will be used to submit the form.
- *style.css*:
  - Notice that without any CSS styling, the panel border is very close to the form
  - We can fix this by adding this to our style:

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
