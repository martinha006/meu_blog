const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show');
});


// Função para inicializar as molduras
function initializeSlides(id) {
    const slideContainer = document.getElementById(id);
    const slides = slideContainer.querySelectorAll('.caixaSlides');
    let currentSlide = 0;

    // Função para mostrar um slide específico
    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        // Oculta todos os slides e mostra apenas o slide atual
        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlide ? 'block' : 'none';
        });
    }

    // Evento de clique para avançar ou retroceder os slides
    slideContainer.querySelector('.voltar').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    slideContainer.querySelector('.frente').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Mostra o primeiro slide ao inicializar
    showSlide(0);
}

// Inicializa as molduras passando o ID de cada uma
initializeSlides('moldura1');
initializeSlides('moldura2');
initializeSlides('moldura3');
initializeSlides('moldura4');
initializeSlides('moldura5');
initializeSlides('moldura6');

// Adicione mais inicializações conforme necessário para outras molduras
