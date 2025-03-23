// Pegando todas as imagens da galeria
const photoItems = document.querySelectorAll('.photo-item');

// Adicionando o evento de clique para mostrar ou esconder a descrição
photoItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open'); // Alterna a visibilidade da descrição
    });
});
