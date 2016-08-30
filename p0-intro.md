# Introduction to HTML/CSS (1 hour)

## Elements, Attributes, Classes, and IDs

- Elements form the fundamental building blocks of a website: they define a particular
  feature on a webpage, be it an image, a block of text, or a navbar.
- An element looks like this:
	`<p>This is my content!</p>`
  - This is a <p> element, which defines a `p`aragraph of text.
- Some important elements include:
  - `<img src="...">`: inserts an image on the page.
  - `<div>Hello!</div>`: divides a segment of content so that we can add styling to it 
  (more on this  in a second).
  - `<a href='...'>My Link</a>`: adds a link.
  - `<h1>Heading 1</h1>`: adds a BIG heading - <h2>, <h3> and so on create smaller
  headings.
- Let's try putting together a basic page: include <h1>, <h2>, and <p> (do this on 
the TV so everyone can see).
  - So we can see the <h1> produces a large heading, and <p> produces a block of text.
  - Add `class="myClass"` within the angle-brackets of any element you like.
  - Add this to a new file called 'style.css': this is our CSS stylesheet. We can add
  CSS rules to this file to alter how our page looks.
  
  `.myClass {
	colour: red;
  }`
  
  - Now add `<link href="style.css" rel="stylesheet">`: this is a link element,
  'linking' our style.css to this page. We use rel="stylesheet" to tell the browser
  that we're linking a CSS stylesheet. We should see that the element we attached the 
  `myClass` class to is now red.

# Introduction to Bootstrap
