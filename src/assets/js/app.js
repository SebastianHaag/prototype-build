$(document).ready(function() {

   //FOUNDATION
   $(document).foundation();

   //LOADING
   $(window).load(function() {
      $("#top").toggleClass('loaded');
   });

   //NAV
   $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height()-($(window).height()/1.15)) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
   });

   //SCROLL
   $(document).on('click', 'a.menu-link', function(event){
      event.preventDefault();
         $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
         }, 500);
   });

   // // Get all the menu link
   var $menu_links = $(".menu-link");

   // Scrollreveal
   window.sr = ScrollReveal({
      reset: false,
   });
   sr.reveal('.sr-section', { mobile: false, duration: 800, scale: 1, viewFactor: 0.2, opacity:0.8, viewOffset: { top: 90, right: 0, bottom: 0, left: 0 }, });
});
