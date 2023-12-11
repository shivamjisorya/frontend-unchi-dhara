    
document.getElementById('openModalButton').addEventListener('click', function () {
    document.getElementById('reservationModal').style.display = 'flex';
  });

  document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('reservationModal').style.display = 'none';
  });

  

    
    //     document.getElementById('openModalButton').addEventListener('click', function () {
    //         document.getElementById('openModal').checked = true;
    //     });
    


    // // ==================================script========================================= -->
    
    //     document.getElementById('openModalButton').addEventListener('click', function () {
    //         document.getElementById('reservationModal').style.display = 'flex';
    //     });

    //     document.querySelector('.close').addEventListener('click', function () {
    //         document.getElementById('reservationModal').style.display = 'none';
    //     });
    
    // ==================================script========================================= -->



    // ==================================script========================================= -->
    
        // Get the button
        var mybutton = document.getElementById("scrollToTopBtn");
    
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
          if (document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        };
    
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", function() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
      
    // ==================================script========================================= -->

     // ==================================script========================================= -->

    // animation for whatsapp -->
    
        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 20) {
                    $('#whatsapp-icon').css({
                        'opacity': 1,
                        'transform': 'translate(0, 100px)'
                    });
                } else {
                    $('#whatsapp-icon').css({
                        'opacity': 0,
                        'transform': 'translate(0, 0)'
                    });
                }
            });
        });
    
    // animation for whatsapp -->



    // ==================================script========================================= -->



    // ==================================script========================================= -->

    // animation for header -->

    $(document).ready(function(){
        $(window).on("scroll",function(){
            if($(window).scrollTop()>800){
                $(".header").addClass("headerChanger");
            }
            else{
                $(".header").removeClass("headerChanger");
            }
        })
    });

    // animation for header -->



    // ==================================script========================================= -->
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                                    // UNCHI DHARA
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    // ==================================script========================================= -->

     // animation for facilities -->
     
     $(document).ready(function ()
     {
        $('#card-three').hover(function () {
            $('#card-three').addClass(' animate__animated animate__fadeIn animate__repeat-2 animate__slow' );
       
        });
    })



    $(document).ready(function ()
    {
       $('#card-four').hover(function () {
           $('#card-four').addClass(' animate__animated animate__fadeIn animate__repeat-2 animate__slow' );
      
       });
   })



    $(document).ready(function ()
    {
       $('#card-three').hover(function () {
           $('#written1').addClass(' animate__animated animate__flash animate__repeat-2 animate__slower' );
      
       });
   })



    $(document).ready(function ()
    {
       $('#card-four').hover(function () {
           $('#written2').addClass(' animate__animated animate__flash animate__repeat-2 animate__slower' );
      
       });
   })


    // animation for facilities -->

    // ==================================script========================================= -->


    // ==================================script========================================= -->
// script for reviews of customers -->
    
        $(document).ready(function ()
        {
           $('#card-five').hover(function () {
               $('#card-five').addClass(' animate__animated animate__bounceInLeft animate__slower' );
          
           });
       })
    


    $(document).ready(function ()
    {
       $('#card-six').hover(function () {
           $('#card-six').addClass(' animate__animated animate__bounceInRight animate__slower' );
      
       });
   })


// script for reviews of customers -->

    // ==================================script========================================= -->


    // ==================================script========================================= -->


                          // script for last pictures -->
    
    
        $(document).ready(function ()
        {
           $('.max51').hover(function () {
               $('.max51').addClass(' animate__animated animate__flash animate__slower' );
          
           });
       })
    


    $(document).ready(function ()
    {
       $('.max52').hover(function () {
           $('.max52').addClass(' animate__animated animate__flash animate__slower' );
      
       });
   })



    $(document).ready(function ()
    {
       $('.max53').hover(function () {
           $('.max53').addClass(' animate__animated animate__flash animate__slower' );
      
       });
   })



    $(document).ready(function ()
    {
       $('.max54').hover(function () {
           $('.max54').addClass(' animate__animated animate__flash animate__slower' );
      
       });
   })

                             // script for last pictures -->

    // ==================================script========================================= -->


    // ==================================script========================================= -->
                    // animation for reservartion sidefacilities -->

    $(document).ready(function ()
    {
       $('#carousel2').hover(function () {
           $('.exist1').addClass(' animate__animated animate__heartBeat animate__slower animate__repeat-3' );
      
       });
   })

                    // animation for reservartion sidefacilities -->

    // ==================================script========================================= -->

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                                    // UNCHI DHARA
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                                    // ACTIVITES
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


$(document).ready(function ()
{
   $('.max42').hover(function () {
       $('.max42').addClass(' animate__animated animate__bounceIn animate__slower' );
  
   });
})


$(document).ready(function ()
    {
       $('.max42').hover(function () {
           $('#flash1').addClass(' animate__animated animate__backInRight animate__slower' );
      
       });
   })


$(document).ready(function ()
{
   $('.max35').hover(function () {
       $('.max35').addClass(' animate__animated animate__bounceIn animate__slower' );
  
   });
})


   $(document).ready(function ()
   {
      $('.max35').hover(function () {
          $('#flash2').addClass(' animate__animated animate__backInLeft animate__slower' );
     
      });
  })


  $(document).ready(function ()
   {
      $('.max41').hover(function () {
          $('.max41').addClass(' animate__animated animate__bounceIn animate__slower' );
     
      });
  })


  $(document).ready(function ()
  {
     $('.max41').hover(function () {
         $('#flash3').addClass(' animate__animated animate__bounceIn animate__slower' );
    
     });
 })




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                                    // ACTIVITES
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%