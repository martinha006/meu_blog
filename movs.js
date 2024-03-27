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
