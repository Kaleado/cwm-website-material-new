# Creating Our Bootstrap Page

## Downloading a Bootstrap Theme

- Similar to downloading Bootstrap itself.
- A Bootstrap theme allows us to change how Bootstrap looks and style our page
more consistently.
- For this workshop, we will be using the 'Paper' theme by Bootswatch, but feel
free to experiment with other themes!
- To download and install the 'Paper' theme:
  - Navigate to `bootswatch.com`.
  - Scroll down to the 'Paper' section - you'll see a large 'download' button
  with a dropdown.
  - Mouse over the dropdown and click `bootstrap.css` - this file defines the
  theme.
  - Save that file to a new directory - this directory will contain your
  website.

## Setting up our index.html

- *index.html*:
  - Add this:

  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Home | Code With Me</title>
      <meta name="author" content="Your Name Here">
      <meta name="description" content="Code With Me material website for Aeona workshop.">
      <meta name="robots" content="index, follow">
      <link rel="stylesheet" href="bootstrap.css" media="all">
    </head>

    <body>

      <!-- Your content goes here! -->

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="jquery.scrollfire.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      <script src="script.js"></script>
    </body>
  </html>
  ```

  - `<title>`: this sets the heading at the top of the page.
  - `<meta>`: meta tags are used to provide extra information about the page
  itself, generally for search engines. For instance, we use the:
    - `<meta name="author" content="Your name here">` to set the author name to
    be ourselves (replace 'your name here' with your name).
    - `<meta name="description" content="My Weekend Website">` to set a
    description for our page.
    - `<meta name="robots" content="index, follow">` to instruct web crawlers
    (such as Google's web crawler) to index the page, and follow any links on
    the page. This is generally used to indicate that the website is available
    to be indexed by search engines. If we wanted our website to be ignored by
    crawlers, we would instead add `content="noindex, nofollow"`. Note that
    these tags can be ignored by malicious web crawlers.
  - We will be adding to this as we progress through the workshop: for now, our
  page is fully set up for us to start building our site!

## Creating the Navbar

- *index.html*:
  - Add this:

  ```
  <nav id="pageNav" class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div id="navbar" class="pull-right collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#mediaSection">Projects</a></li>
          <li><a href="#testimonialsSection">Testimonials</a></li>
        </ul>
      </div>
    </div>
  </nav>
  ```

  - Explanation:
    - We encapsulate all of our navbar content in a `<nav>` element. We give it
    the ID `pageNav` (this will be used later), as well as the classes `navbar
    navbar-default navbar-fixed-top`:
      - `navbar` and `navbar-default` are used to style the navbar according to
      our Bootstrap theme: inside of our `bootstrap.css`, there are styling rules
      for `.navbar` and `.navbar-default`, defining the navbar's colour, size,
      positioning, and other visual effects.
      - `navbar-fixed-top` is used to 'pin' the navbar to the top of the window
      at all times - we could use `navbar-fixed-bottom` to instead pin it to
      the bottom of the screen.
    - We add a `.container-fluid` as well - this is to ensure that the content
    inside the navbar spans the entire screen.
    - Inside this `.container-fluid`, we have inserted a div with classes
    `navbar-collapse pull-right collapse`:
      - `pull-right`: this right-aligns the content inside of the navbar, causing
      our navbar links to be displayed on the right side of the screen. We could
      have used `.pull-left` to pull them to the left side of the screen.
      - `collapse` and `navbar-collapse`: these are used to allow the navbar to
      collapse and expand with the size of the window.
    - Inside our `.navbar-collapse` div, we add a `<ul>` - this tag is used to
    represent an _unordered list_ - in this case, our Bootstrap theme interprets
    this unordered list as a list of links in our navbar.
      - `.navbar-nav`: used to indicate that the `<ul>` is to be displayed as a
      set of navbar elements.
      - We use `<li>` tags to represent _list items_ - that is, our individual
      navbar links. Notice we insert an `<a>` tag inside each `<li>`.
      - It is worth noting that we are currently using _in-page anchors_ for our
      navbar links, causing the view to 'jump' to the relevant sections when we
      click on a link. We could instead have entirely new pages for each of
      these segments - all we would need to do is include the code for the navbar
      and the `<head>` of this page.

## Creating a collapsible navbar

- *index.html*:
  - We will create the traditional 'hamburger button', allowing the navbar to
  collapse on smaller displays.
  - We do this by adding:

  ```
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">Code With Me</a>
  </div>
  ```

  - `navbar-header`: used to wrap the entirety of our navbar brand and header.
  - `navbar-brand`: this class transforms a normal `<a>` element in a `.navbar-header`
  into a 'brand' displayed as part of the navbar. You can include an image here
  if you like, but be prepared to adjust the paddng.
  - Classes containing `aria`, such as `aria-expanded` and `aria-controls` are
  used by screen readers (i.e. for hearing impaired users).
  - Resize the window to see the results of our `<button>`:
    - `.navbar-toggle` is used to make the button expand and contract the navbar.
    - This class must be used in tandem with the `data-toggle='collapse'` attribute,
    which sets the button's behaviour to collapse the navbar.
    - It must also be used with the `data-target="#navbar"`, which sets the
    target of the collapsing functionality to be the attribute with the ID 'navbar'.
  - The `<span>`s are simply used to make the horizontal bars of the hamburger button.
