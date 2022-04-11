//  Carousel Script


    $('.owl-carousel').owlCarousel({
            loop:true,
            margin:40,
            nav:false,
            autoplay:true,
            autoplaytimeout:500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                900:{
                    items:3
                }
        }
    })


    // Pre Loader

      var preloader = document.getElementById('loader');
      function loadfunction(){
        preloader.style.display = 'none'
      }


    // Active 

    $(document).ready(function(){

        $('ul li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
          });
    
    });