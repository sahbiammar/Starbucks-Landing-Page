// Select element function

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}


$(document).ready(function(){  

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    }) 
});
