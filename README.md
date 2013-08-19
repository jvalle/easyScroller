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

Options
-------

You can pass configuration options in an object to `easyScroller()`.  For example: `$('.scrollNav').easyScroller({ scrollDownSpeed: 500 })`.

| Option           | Default   | Comment                                                                                                           |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| backToTop        | `false`   | Selector for an optional link that will be used to scroll back to the top of the page.                            |
| scrollDownSpeed  | 800       | Time, in milliseconds, to be spent on the scroll-down animation.                                                  |
| scrollUpSpeed    | 600       | Time, in milliseconds, to be spent on the scroll-up animation.                                                    |
| topOffset        | 0         | Distance, in pixels, to undershoot the target when scrolling. Allows for fixed navigation at the top of the page. |

More features to come as my laziness subsides... Enjoy!
