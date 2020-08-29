const slide = document.querySelector('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let images = ['img/car1.jfif', 'img/car2.jfif', 'img/car3.jfif', 'img/car4.jfif', 'img/car5.jfif', 'img/car6.jfif'
, 'img/car7.jfif', 'img/car8.jfif', 'img/car9.jfif', 'img/car10.jfif'];

let currentImage = 0;
window.addEventListener('click', function(){
    slide.src = images[currentImage]; 
    slide.classList.add( "fade-in");

});

next.addEventListener('click', function(){
    currentImage++;
    slide.classList.toggle( "fade-in");
    if(currentImage === images.length-1){
        currentImage = 0;
    }
});

prev.addEventListener('click', function(){
    currentImage--;
    if(currentImage < 0){
        currentImage = images.length-1;
    }
    slide.classList.toggle( "fade-in");
})