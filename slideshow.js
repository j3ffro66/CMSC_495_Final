document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0;
    showSlides();
    // Displays the slides in slideshow.
    function showSlides() {
        var slides = document.getElementsByClassName("slideshow-image");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        // This changes the slide every 5 seconds. 
        setTimeout(showSlides, 5000);
    }

    function changeSlide(n) {
        slideIndex += n;
        var slides = document.getElementsByClassName("slideshow-image");
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});