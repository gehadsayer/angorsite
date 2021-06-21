$(document).ready(function(){

    $(window).scroll(function(){
        let scrollTop= $(window).scrollTop();
        let offAbout= $('.about').offset().top;
        if(scrollTop >= offAbout){
            $('.btn-up').fadeIn(1000);
            $('nav').css({
                backgroundColor:'rgba(0,0,0,0.5)',
                transition:'all 1s',
                padding:'5 10px'
            })
        }
        else{
            $('.btn-up').fadeOut(1000);
            $('nav').css({
                backgroundColor:'transparent',
                transition:'all 1s',
                padding:'0 0px'
            })
        }
    });
    
    $('.btn-up').click(function(){
        $('body, html').animate({
            scrollTop:'0'
        },3000)
    });
    
    $('.nav-link').click(function(){
      let hrefValue=  $(this).attr('href');
      let offsetSec=$(hrefValue).offset().top;
      $('body').animate({
          scrollTop:offsetSec
      },2000)
    })
    
  
    
   
   
        $('.loading').fadeOut(3000,function(){
            $('body').css('overflow','auto')
        })
    })