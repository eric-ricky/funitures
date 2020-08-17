
$(document).ready(function(){
    // smooth scrolling
    $(".navbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){
                window.location.hash = hash;
            });
        } // End if
    });

    // navbar button
    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass("close");
    });


    // slide in
    $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;      
          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
        });
    });

    // navbar onscroll
    $(window).on('scroll', function() {
        let pixels = 50;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-transparent');
          } else {
            $('.navbar-expand-md').addClass('navbar-transparent');
            $('.navbar-expand-md').removeClass('navbar-reduce');
          }
    });

    // number count animation
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    
  })