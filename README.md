easyScroller.js
============
This is a simple jQuery plugin that allows you to define a link or set of links to scroll down to an element on your page.

How to Use
----------
Once you have included the easyScroller.js plugin in your page, simply add a class or id that you will use to select your `<a>` elements appropriately.
Ex.  For an individual `<a>` element, or scattered `<a>` elements, one can apply the class or id directly to the `<a>` element.  For multiple `<a>` elements, such as elements found in a navigation menu, one might apply the class or id to a `<nav>` or `<ul>` element.

Next, define the href attribute of your `<a>` element as `href="#(id_of_destination)"`.  This must be defined on each `<a>` element that you want to be a scroll-link.  This also serves as a functional fall-back if javascript is not enabled for the user.  (Thanks Michael!)

So for example, a single `<a>` element that you would like to scroll to a `<div id="myDiv">` would be of the form: 
```<a class="scrollNav" href="#myDiv">Click here to go to myDiv!</a>```

Finally, call the plugin using your appropriate selector:
`$('.scrollNav').easyScroller();`

The settings that you can pass when you call the plugin, along with their defaults are as follows:
    scrollDownSpeed: 800,
    scrollUpSpeed: 600,
    backToTop: false
    
If you would like to set an `<a>` element as a link that will scroll back to the top of the page, pass the selector you would like to use with the backToTop setting instead of false.

More features to come as my laziness subsides... Enjoy!
