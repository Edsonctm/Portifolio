let contador = 0

const valor = document.querySelector("#contagem")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e)
        {
            const estilos = e.currentTarget.classList
            if (estilos.contains("diminuir")){contador--}
            else if (estilos.contains("aumentar")){contador++}
            else if (estilos.contains("zerar")){contador = 0}

            

            if (contador > 0){
                    valor.style.color = "green"
            }
            if (contador < 0){
                    valor.style.color = "red"
            }
            if (contador === 0){
                    valor.style.color = "gray"
            }

                valor.textContent = contador

        })
    })