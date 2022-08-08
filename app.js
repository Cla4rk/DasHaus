$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $(document).ready(function(){
    $(window).scrollTop(0);
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    // Menu Toggler
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
      })
      $(document).ready(function(){
	$('.toggle').click(function(){
		$(this).toggleClass('open');
	});
});
//SmoothScrolling
    SmoothScroll({
        // Scrolling Core
        animationTime: 800, // [ms]
        stepSize: 100, // [px]

        // Acceleration
        accelerationDelta: 50,  // 50
        accelerationMax: 3,   // 3

        // Keyboard Settings
        keyboardSupport: true,  // option
        arrowScroll: 50,    // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Other
        touchpadSupport: false, // ignore touchpad by default
        fixedBackground: true,
        excluded: ''
    })
    // Reveal
    window.addEventListener('scroll',reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i ++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i]. getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
        }
    }
    // Reveal
    window.addEventListener('load',reveal2);

    function reveal2(){
        var reveals = document.querySelectorAll('.reveal2');

        for(var i = 0; i < reveals.length; i ++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i]. getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
        }
    }
    
        // Reveal
    window.addEventListener('load',reveal3);

    function reveal3(){
        var reveals = document.querySelectorAll('.reveal3');

        for(var i = 0; i < reveals.length; i ++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i]. getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
        }
    }
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3.5,
                nav: false
            }
        }
    });
});
