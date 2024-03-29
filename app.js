$(document).ready(function(){
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
            var revealpoint = 100;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
        }
    }
    
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        dots:true ,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items: 1,
                nav: false,
                loop:false
            },
            600:{
                items: 2.5,
                dots:false,
                nav: true
            },
            1200:{
                items: 3.2,
                dots:false,
                nav: true
            },
            1300:{
                items: 3.5,
                dots:false,
                nav: true
            }
        }
    });
});


