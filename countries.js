document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.country-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
  
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  
    // Автопереключение (опционально)
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  });