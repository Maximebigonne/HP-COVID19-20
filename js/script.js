$(document).ready(function(){

    $(window).scroll(function() {
      if (window.matchMedia("(min-width:1161px) and (max-width: 5000px)").matches) {
        if ($(this).scrollTop() > 200) {

            if($('.topbar').length){
              $('.topbar').addClass('rido');
              $('#menu').addClass('top');
            }

        } 
        else {

            if($('.topbar').length){
              $('.topbar').removeClass('rido');
              $('#menu').removeClass('top');
            }
        }
      }     
      else {
          if($('.topbar').length){
            $('.topbar').removeClass('rido');
            $('#menu').removeClass('top');
          }
      }
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
  }); 
  