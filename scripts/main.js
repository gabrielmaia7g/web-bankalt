const btnMobileLista = document.querySelector('.btnMenu')
const navMobileLista = document.querySelector('.drop-down-mobile');

btnMobileLista.addEventListener('click', ()=> {
    navMobileLista.classList.toggle('btnMenu-hidden');
})
