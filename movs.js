// Seleciona o botão e o menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Adiciona um evento de clique ao botão
menuBtn.addEventListener('click', function() {
    // Alterna a classe 'show' no menu
    menu.classList.toggle('show');
});


// Seleciona todos os links
const links = document.querySelectorAll('.botoes, #menu a');

// Adiciona um evento de clique a cada link
links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'clicked' de todos os links
        links.forEach(link => {
            link.classList.remove('clicked');
        });
        // Adiciona a classe 'clicked' apenas ao link clicado
        this.classList.add('clicked');
    });
});


var slide = 1;
slideShow(slide);

// Função para avançar/retroceder os slides
function plusSlides(n) {
    slideShow(slide += n);
}

// Função para mostrar o slide atual
function currentSlide(n) {
    slideShow(slide = n);
}

function slideShow(n) {
    var i;
    var slides = document.getElementsByClassName("caixaSlides");
    if (n > slides.length) {slide = 1}    
    if (n < 1) {slide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slide-1].style.display = "block";  
}