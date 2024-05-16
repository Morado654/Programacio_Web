let index = 0;
mostrar();

function mostrar() {
    const slides = document.querySelectorAll('.contenido img');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].classList.add('active');

    setTimeout(mostrar, 2000);
}

