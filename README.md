easyScroller.js
============
This is a simple jQuery plugin that allows you to define a link or set of links to scroll down to an element on your page.

How to Use
----------
Once you have included the easyScroller.js plugin in your page, simply add a class that you will use to select your `<a>` elements appropriately.
Ex.  For an individual `<a>` element, or scattered `<a>` elements, one can apply the class directly to the `<a>` element.  For multiple `<a>` elements, such as elements found in a navigation menu, one might apply the class to a `<nav>` or `<ul>` element.

Next, define the href attribute of your `<a>` element as `href="#(id_of_destination)"`.  This must be defined on each `<a>` element that you want to be a scroll-link.  This also serves as a functional fall-back if javascript is not enabled for the user.  (Thanks Michael!)

So for example, a single `<a>` element that you would like to scroll to a `<div id="myDiv">` would be of the form: 
```<a class="scrollNav" href="#myDiv">Click here to go to myDiv!</a>```

Finally, call the plugin using your class as the selector:
`$('.scrollNav').easyScroller();`

There is also a feature of this plugin that turns any `<a>` with class `.backToTop` into a link that will scroll the user back to the top of the page.

More features to come as my laziness subsides... Enjoy!
