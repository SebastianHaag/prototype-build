$(document).ready(function() {

   //LOADING
   $(window).load(function() {
   });

   //FOUNDATION
   $(document).foundation();


   //SCROLL
   $(document).on('click', 'a', function(event){
      event.preventDefault();
      if (matchMedia('all and (orientation:landscape)').matches) {
         $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
         }, 500);
      }
   });

   // Get all the menu link
   var $menu_links = $(".menu-link");
   //Scrollreveal
   window.sr = ScrollReveal({
      reset: true,
      afterReveal: function (domEl) {
         var $active_link = $('a[href="#' + domEl.id + '"]');
         $menu_links.removeClass('is-active');
         $active_link.addClass('is-active');
      }
   });
   sr.reveal('.sr-section', { mobile: false, duration: 600, scale: 1, viewFactor: 0.2, viewOffset: { top: -100, right: 0, bottom: 0, left: 0 }});
});
