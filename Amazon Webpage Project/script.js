const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index){
    slides.forEach(slide => slide.classList.remove('active'));
    if (index >= slides.length) currentIndex = 0;
    else if (index<0) currentIndex = slides.length-1;
    else currentIndex = index;
    slides[currentIndex].classList.add('active');
}
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});