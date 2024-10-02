const divAnimal = document.querySelector('.flex-animais div ul');

const raposa = document.querySelector('#raposa');
const esquilo = document.querySelector('#esquilo');
const urso = document.querySelector('#urso');
const lobo = document.querySelector('#lobo');
const macaco = document.querySelector('#macaco');
const leao = document.querySelector('#leao');

const sliderAnimais = () => {
    const scrollTop = divAnimal.scrollTop; // Obtém a posição do scroll vertical da div
    console.log(scrollTop);
    if (scrollTop == 0 && scrollTop < 250) {
        raposa.classList.add('active');
        esquilo.classList.remove('active');
        urso.classList.remove('active');
        lobo.classList.remove('active');
        macaco.classList.remove('active');
        leao.classList.remove('active');
    }

    if(scrollTop > 250 && scrollTop < 650) {
        raposa.classList.remove('active');
        esquilo.classList.add('active');
        urso.classList.remove('active');
        lobo.classList.remove('active');
        macaco.classList.remove('active');
        leao.classList.remove('active');
    } 

    if (scrollTop >= 650 && scrollTop < 750) {
        raposa.classList.remove('active');
        esquilo.classList.remove('active');
        urso.classList.add('active');
        lobo.classList.remove('active');
        macaco.classList.remove('active');
        leao.classList.remove('active');
    }

    if (scrollTop >= 1000 && scrollTop < 1420) {
        raposa.classList.remove('active');
        esquilo.classList.remove('active');
        urso.classList.remove('active');
        lobo.classList.add('active');
        macaco.classList.remove('active');
        leao.classList.remove('active');
    }

    if (scrollTop >= 1350 && scrollTop < 1700) {
        raposa.classList.remove('active');
        esquilo.classList.remove('active');
        urso.classList.remove('active');
        lobo.classList.remove('active');
        macaco.classList.add('active');
        leao.classList.remove('active');
    }

    if (scrollTop >= 1700) {
        raposa.classList.remove('active');
        esquilo.classList.remove('active');
        urso.classList.remove('active');
        lobo.classList.remove('active');
        macaco.classList.remove('active');
        leao.classList.add('active');
    }
}

divAnimal.addEventListener('scroll', sliderAnimais); // Escuta o evento de scroll na div interna

export default sliderAnimais;
