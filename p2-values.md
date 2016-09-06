# The Values Section

## Creating the Heading
- *index.html*:
  - Create a new div with the ID 'values' - this will wrap around our entire values section.
  - Within our `#values` div, we will create a div with `.valuePadding` - this will be used to
	add a border to our values, so they don't hug the sides of the window.
  - Within _this_ div, add this:

	```
	<div class="row text-center">
		<h1 class="valueSectionTitle">Our Company Values</h1>
		<h2 class="valueSubtitle">They mean a lot to us.</h2>
	</div>
	```

  - `.text-center`: centers the heading on the page.
  - We also use `.row` to ensure that the heading will span the entire window, so that we can add content below it.
- *style.css*:
  - Add this:

	```
	#values{
		height: 100vh;
	}

	.valuePadding{
	    padding: 15px 0px;
	}

	.valueSectionTitle{
	    text-shadow: none!important;
	}

	.valueTitle, .valueSubtitle {
	    font-size: xx-large;
	    text-transform: uppercase;
    }
	```

  - `text-shadow: none!important`: we have seen the `text-shadow` property before, but what about `!important`?
	- `!important` is used to tell the browser to override any other rules that might be applied to this element - for instance,
	  we earlier added a rule to apply a `text-shadow` to every `<h1>` in our document - by using `!important`, we can override
	  that and remove the `text-shadow`.
  - `.valueTitle, .valueSubtitle`: note that we can use a comma to denote that we want to apply our rule across multiple selectors
	(things like `.valueTitle` and `h1` are called 'selectors', and we will be learning more as the workshop progresses).
  - `font-size: xx-large`: this is used to alter the font size of any textual elements within (such as `h1`, `p`, etc.). Try playing
	with some other possible values:
		- `30px`: this will set the font size to be exactly 30px, no matter what.
		- `xx-small`: this will set the font size to be very, very small - precisely _how_ small depends on the browser.
		- `150%`: this will set the font size to be 1.5x the font size of the element it resides in - for example, a `p`
		  with a font size of about 10px containing an element with `font-size: 150%` will be of size 15px.
		- Other values are possible - have a look on W3 Schools for a complete list.
  - `text-transform: uppercase`: as loosely suggested, makes the text all uppercase. Other transformations can be used as well, including
	`lowercase` and `capitalize`.
- If you save and open your page, you should have a nice looking heading for the new section!

## Creating the Value Grid Structure

- *index.html*
  - After the `.row` inserted previously, add this:

  ```
  <div class='valueGrid'>
	  <div class="row">
		<!-- This is the top row of our values.-->
	  </div>
	  <div class="row">
		<!-- This is the bottom row of our values.-->
	  </div>
  </div>
  ```

  - We will use `.valueGrid` to apply some styling to our two rows of values.
  - We have a `.row` for each segment of values
  - Inside the top row we will use three `.col-md-4` divs to add three values like so:

	<!-- This is the top row of our values -->
	<div class='col-md-4'>
		<!--First value goes here-->
	</div>
	<div class='col-md-4'>
		<!--Second value goes here-->
	</div>
	<div class='col-md-4'>
		<!--Third value goes here-->
	</div>

  - Remember that each row is twelve columns - if we wanted four values per column, we could use `.col-md-3`.
- *style.css*
  - We want our `.valueGrid` div to contrast slightly with the white background of the page.
  - We also want our `.valueGrid` to be slightly padded against the previous section, so the text doesn't hug against the bottom of the hero banner.
  - *Does anyone have any ideas how we might achieve these effects?*
  - _These issues will arise constantly: if a section seems to be oddly spaced, we probably need to add some degree of `padding` or `margin` to it._
  - To achieve these effects, we add:

  ```
  .valueGrid{
	  padding: 25px 0px;
	  background: rgb(240, 240, 240);
  }
  ```

## Creating Our Values

- *index.html*:
  - Each value will consist of a Font Awesome icon in one column, and some text in another, larger column.
  - Might want to draw a diagram and explain why the markup works the way that it does.
  - Remember that we can nest columns!
  - Each value will look like this:

	```
	<div class="col-xs-12 col-md-4">
		<div class="alignRight col-xs-3">
			<h2 class="text-success"><i class="valueIcon fa fa-file"></i></h2>
		</div>
		<div class="col-xs-9">
			<h2 class="valueTitle">Easy To Download</h2>
			<p class="valueDescription">Simply download a CSS file and replace the one in Bootstrap. No messing around with hex values.</p>
		</div>
	</div>
	```

	- Notice we have used _two_ column classes on the divs - this is so the content fits properly on smaller screens: the `.col-xs-12` is for
	  extra small screens (i.e. mobile phones) and the `.col-md-4` is for medium screens and up.
	- Using Font Awesome:
	  - We have to download Font Awesome and use a `<link type='stylesheet' href='...'>` tag to include it for use on our page.
	  - An *icon font* is a font consisting of a set of icons - it may hence be manipulated as though it were text in CSS (i.e. we can
		give it a `font-size`, change its `color`, and even give it a `text-shadow`.
	  - To use an icon, we must insert `<i class="fa fa-icon-name"></i>`: ignore the fact that the `<i>` tag is usually for italicising text -
		in this instance, we use the `<i>` tag to insert icons via Font Awesome. We can also add a variety of other classes, such as:
			- `.fa-lg`: increase the size of the icon by 33%.
			- `.fa-2x`: double the size of the icon.
- *style.css*:
  - We used `.alignRight` to apply this:

  ```
  .alignRight {
	  text-align: right;
  }
  ```

  - Notice that the 'Easy To Download' has our earlier style attached to it.
  - We also applied some styling to `.valuesDescription`:

  ```
  .valueDescription{
	  color: #aaa;
	  font-size: 20px;
  }
  ```

  - We can then copy this entire block three times in the top row and three times in the bottom row to form our two rows of values.
  - Feel free to change them however you like!

## Adding a Call To Action
- *index.html*:
  - Underneath your `.valueGrid`, add:

	```
	<div class="row">
	  <hr>
	  <div class="col-xs-12">
	    <div class="valuesSummary">
	      <h3>
			  So as you can tell, our company values are very important to us.
	      </h3>
	      <button class="btn btn-lg">Call To Action</button>
	    </div>
	  </div>
	</div>
	```

  - `<hr>`: adds the horizontal rule above the call to action button.
  - `.btn .btn-lg`: these are used to add Bootstrap styling to the 'Call To Action' button: without these, the buttons will
	simply appear to be native browser buttons. In particular, `.btn-lg` will increase the size of the button.
- *style.css*:
  - Add this:

  ```
  .valuesSummary{
	  text-align: center;
	  padding-bottom: 25px;
  }
  ```

  - Largely self-explanatory.
