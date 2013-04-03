// easyScroller v0.1 jQuery plugin
// Written by: Jason Valle
// Date Modified: 3/28/2013
//
// Instructions and code maintained at https://github.com/jvalle/easyScroller 

(function($){
    $.fn.easyScroller = function(options) {

        var settings = $.extend({
            backToTop: false,
            scrollDownSpeed: 800,
            scrollUpSpeed: 600
        }, options);       

        $(this).click(function(event) {
            var $this = $(this),
                sectionId = $this.attr('href');

            // it seems like this should be necessary, but Chrome and Firefox work fine without it
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(sectionId).offset().top
            }, settings.scrollDownSpeed);

            return false;
        });

        if (settings.backToTop) {
            $(settings.backToTop).click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, settings.scrollUpSpeed);

                return false;
            });
        }
    };
})(jQuery);