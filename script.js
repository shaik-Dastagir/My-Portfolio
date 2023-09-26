// typing text animation script
var typed = new Typed("#element", {
    strings: ["Programmer.", " Web Developer.", "Data Analytics.", ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});


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

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
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
            items: 3,
            nav: false
        }
    }
});
});


// the bubble pointer effect
const bubbleContainer = document.querySelector('.bubble-container');
const bubble = document.querySelector('.bubble');

bubbleContainer.addEventListener('mousemove', (e) => {
    const x = e.pageX; // Updated here
    const y = e.pageY; // Updated here

    // Set the bubble's position to be at the center of the pointer
    bubble.style.left = x - bubble.clientWidth / 2 + 'px';
    bubble.style.top = y - bubble.clientHeight / 2 + 'px';
});

setInterval(() => {
    // Toggle the animation class to restart the animation
    bubble.classList.toggle('pulse');
}, 2000); // Change the interval duration as needed
// End of bubble effect
 
// this is menu icon 
// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '1.4s');