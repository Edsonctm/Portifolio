//Este código é para o botão de DarkMode//

const chk = document.getElementById("darkMode")

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})