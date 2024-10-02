const accordion = document.querySelector('#accordion');

const animAccordion = () => {
    const scroolPosition = window.scrollY; 
    if (scroolPosition > 284) {
        accordion.classList.add('active-accordion');
    } else {
        accordion.classList.remove('active-accordion');
    }
}

window.addEventListener('scroll', animAccordion); // Escuta o evento de scroll

export default animAccordion;
