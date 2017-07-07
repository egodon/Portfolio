
$( document).ready(function() {
    // Smooth Scroll to section
    $('a[href*="#"]')
        .not('[href="#"]')
        .click(function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }

            }
        });
        // When "contact" is clicked
        $('#contact-nav-btn').click(function(){
            $('#first_name').focus();
        });
    });

