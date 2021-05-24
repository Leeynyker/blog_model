jQuery('document').ready(function($){
 
 var menuBtn =$('.header__link--menu'),
 menu = $('.header__navigate');

 menuBtn.click(function() {
   if( menu.hasClass('header__navigate--show') ) {
    menu.removeClass('header__navigate--show');
   } else {
     menu.addClass('header__navigate--show');
   }
 });
});

