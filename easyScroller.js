// easyScroller v0.1 jQuery plugin
// Written by: Jason Valle
// Date Modified: 3/28/2013
//
// Instructions and code maintained at https://github.com/jvalle/easyScroller 



(function($){
    $.fn.easyScroller = function() {
        $this = this;

        $this.click(function() {
            var sectionId = '#' + $this.attr('id').replace('-link', '');

            $('html, body').animate({
                scrollTop: $(sectionId).offset().top
            }, 800);

            return false;
        });

        $('.backToTop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);

            return false;
        });
    };
})(jQuery);