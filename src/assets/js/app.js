$(document).ready(function() {

   //LOADING
   $(window).load(function() {
      $("html, body").delay(200).animate({scrollTop: $('#topLoaded').offset().top }, 500);
      $("#top").delay(200).toggleClass('loaded');

   });

   //FOUNDATION
   $(document).foundation();

   //MOBILE MENU
   $('#nav-icon').click(function() {
      $('#nav-icon, #topBarContent').toggleClass('open');
      return false;
   });
   $('nav ul li a').click(function() {
      $('#nav-icon, #topBarContent').removeClass('open');
   });
   document.addEventListener('touchmove', function(e) {
      if ($('html.noScroll').length > 0) {
         if (($('nav').has($(e.target)).length > 0)) {
            e.preventDefault();
         }
      }
   });

   //SCROLL
   $(document).on('click', 'a', function(event){
      event.preventDefault();
      if (matchMedia('all and (orientation:landscape)').matches) {
         $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
         }, 500);
      }
   });

   //HIDE MENU
   $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height()-400) {
            $("nav").addClass("checkout");
        } else {
            $("nav").removeClass("checkout");
        }
   });

   //MENU BG
   $(window).scroll(function () {
        if ($(document).scrollTop() > $(window).height()-600) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
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
   sr.reveal('.sr-section', { duration: 400, scale: 1, viewFactor: 0.1, viewOffset: { top: -100, right: 0, bottom: 0, left: 0 }});
});
