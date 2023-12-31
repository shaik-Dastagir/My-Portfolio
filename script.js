// typing text animation script
var typed = new Typed("#element", {
    strings: ["Programmer.", " Web Developer.", "Data Analyst.", ],
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
$('.navbar-list').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.navbar-list i').toggleClass("active");
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

// this is the section h1 animation timeing
  // Function to trigger the animation
  function animateMenu() {
    const menuItems = document.querySelectorAll('.delayeds-animation');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('animate__headShake');
            void item.offsetWidth; // Force reflow to restart animation
            item.classList.add('animate__headShake');
        }, index * 500); // Delay each item by 500ms
    });
}

// Trigger the animation on page load
animateMenu();

// Set an interval to repeat the animation every 5 seconds
setInterval(animateMenu, 2500);
// end of section h1
 
// this is menu icon 
// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '1.4s');

// this is scroll up button Animation
 // Function to trigger the animation
 function animateDiv() {
    const div = document.querySelector('.delayedes-animation');
    div.classList.remove('animate__bounce');
    void div.offsetWidth; // Force reflow to restart animation
    div.classList.add('animate__bounce');
}

// Trigger the animation on page load
animateDiv();

// Set an interval to repeat the animation every 3 seconds
setInterval(animateDiv, 3000);
// end of scroll animation
