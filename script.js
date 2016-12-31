var slide = 1;

       showSlides(slide);

      function currentImage(n){
            slide = n;
            showSlides(slide);
      }

      function plusImage(n){
            slide= slide + n;
            showSlides(slide); 
      }

      function showSlides(n){
            var i;
            var slides = document.getElementsByClassName("image");
            var dots = document.getElementsByClassName("dot");

            if (n > slides.length) {slide = 1}    
            if (n < 1) {slide = slides.length}
            for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slide-1].style.display = "block";  
            dots[slide-1].className += " active";
      }


      function animateScroll(id){
            var x = id.offset().top;
            $('html,body').animate({scrollTop: x}, "slow");
      }