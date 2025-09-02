// Seleciona todos os links com texto 'Ver Gif'
document.querySelectorAll('a').forEach(function(link) {
    if (link.textContent.trim().startsWith('Ver Gif')) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var href = link.getAttribute('href');
        if (href && href.endsWith('.gif')) {
            var modalImg = document.querySelector('#gifModal img');
            modalImg.src = href;
        }
        document.getElementById('gifModal').classList.remove('hidden');
    });
}
});

document.getElementById('closeGifModal').addEventListener('click', function() {
document.getElementById('gifModal').classList.add('hidden');
});

// Fecha ao clicar fora do modal
document.getElementById('gifModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.add('hidden');
    }
});

// Esperar o carregamento completo da página
window.addEventListener('load', () => {
    // Variáveis do Carrossel de Imagens
    let currentImageIndex = 0;
    const sliderImages = document.querySelectorAll('.slider-image');
    const totalSliderImages = sliderImages.length;

    // Função para mostrar a imagem atual
    function showImage(index) {
        // Ocultar todas as imagens
        sliderImages.forEach((image, idx) => {
            image.style.display = (idx === index) ? 'block' : 'none'; // Apenas a imagem atual é exibida
        });
    }

    // Função para mudar a imagem com as setas
    window.changeImage = function(direction) {
        currentImageIndex = (currentImageIndex + direction + totalSliderImages) % totalSliderImages;
        showImage(currentImageIndex);
    };

    // Iniciar mostrando a primeira imagem
    showImage(currentImageIndex);
});

