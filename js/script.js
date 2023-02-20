const burger = document.getElementById('burger')
const nav = document.getElementById('list_burger')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

burger.addEventListener('click', toggleMenu)