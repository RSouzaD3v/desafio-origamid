const contato = document.querySelector('#contato');

const animContato = () => {
    const scroolPosition = window.scrollY; 
    console.log(scroolPosition);
    if (scroolPosition > 750) {
        contato.classList.add('active-contatos');
    } else {
        contato.classList.remove('active-contatos');
    }
}

window.addEventListener('scroll', animContato); // Escuta o evento de scroll

export default animContato;
