$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClasse('toggle');

});
$(window).on ('scroll load',function(){

    $('#menu').removeclass('fa-times');
    $('header').removeclass('toggle');

});

$('a[href*="#"]').on('click',function(e){
    e.preventDefaut();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
   },
    500,
   'linear'
   
   ); 

}); 

});