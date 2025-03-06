let menuDiv = document.getElementById('menu-mobile')
let btnMenu = document.getElementById('menu-opener')

btnMenu.addEventListener('click', openMenu) // Corrigido

function openMenu(){
    menuDiv.classList.toggle('abrir')
}
