# Adding JavaScript to our Site

## Intro to jQuery

- *jQuery* is a library we can use to interact with our page with JavaScript.
- You can still interact with your page without jQuery, but jQuery is a better
way of doing it.
- It allows us to use our CSS selectors, such as `.padding-fix` and `h1`, to apply
effects and execute JavaScript.
- The basis of jQuery is the `jQuery()` function, often shortened to `$()`, which
fetches all the elements matching a particular selector.
- The jQuery function also provides a collection of helper functions to help us
alter things within our website.

## Disappearing navbar

- *script.js*:

```
$(document).ready(function(){
	//We put things here that we want to execute as soon as the page loads.
});
```

- `$(document).ready()`: sets a function to run when the page is 'ready',
that is, it finishes loading.
	- Note that this is equivalent to `jQuery(document).ready()`.
- The function we give `$(document).ready()` as a parameter is the function that
it will run.

```
$(document).ready(function(){

	$(window.scroll(function(){
		var distanceScrolled = $(window).scrollTop();
		if(distanceScrolled == 0){
			//If we are at the top of the page.
		}
		else {
			//If we are not.
		}
	});
	
});
```

- `$(window).scroll()`: sets a function to run when we scroll the window.
- `$(window).scrollTop()`: returns the number of pixels we have scrolled down. If this
is zero, then we are at the top of the page.

```
$(document).ready(function(){

	$(window.scroll(function(){
		var distanceScrolled = $(window).scrollTop();
		if(distanceScrolled == 0){
			//If we are at the top of the page.
			$("nav").fadeIn();
		}
		else {
			//If we are not.
			$("nav").fadeOut();
		}
	});
	
});
```

- `$("nav").fadeIn();`: notice the `$(nav)` - this selects all of the `<nav>` elements on our page.
We then cause those elements to `fadeIn()` to full opacity.
- `$("nav").fadeOut();`: opposite of above. _Note that "nav" is in quotes._


## Tooltips

- *index.html*:
  - On whatever you want a tooltip on:
  
  ```
  data-toggle="tooltip" data-placement="top" title="This is a tooltip!"
  ```
	
- *script.js*:
  - We add this to the inside of our `$document.ready()`:
  
  ```
  $('[data-toggle="tooltip"]').tooltip();
  ```
  
  - This is to tell the browser that we've got tooltips, so they need to handle them.
  - Notice the selector we have is used to select all elements with `data-toggle="tooltip"`.
  
## Extras

- jQuery .animate() method.
- Scrollfire @ `https://plugins.jquery.com/scrollfire/`.
