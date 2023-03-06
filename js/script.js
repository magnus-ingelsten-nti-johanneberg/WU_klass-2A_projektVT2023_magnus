const burger = document.getElementById('burger')
const list = document.getElementById('list_pages')

function toggleMenu() {
    burger.classList.toggle('burger_active')
    burger.classList.toggle('burger_inactive')
    list.classList.toggle('list_inactive')
    list.classList.toggle('list_active')
}

burger.addEventListener('click', toggleMenu)