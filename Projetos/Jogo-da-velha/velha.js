const celulas = document.querySelectorAll(".campo")
const board = document.querySelector(".board")
const msg = document.querySelector(".msgVitoria p")
const msgDiv = document.querySelector(".msgVitoria")
const reiniciar = document.querySelector(".msgVitoria button")

var vezDoCirculo

const verificarVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const startGame = () => {
        vezDoCirculo = false
    for (const campo of celulas){
        campo.classList.remove('o')
        campo.classList.remove('x')
        campo.removeEventListener("click", jogada)
        campo.addEventListener("click", jogada,{once: true})
    }

    boardHover()
    msgDiv.classList.remove('mostrarMensagem')
}

function endGame(empate) {
    if (empate) {
        msg.innerText = "Empate"
    } else {
        msg.innerText = vezDoCirculo ? "O Venceu!" : "X Venceu!"
    }

    msgDiv.classList.add('mostrarMensagem')
}

const checadorDeVitoria = (jogadorAtual) => {
    return verificarVitoria.some((combination) => {
        return combination.every((index) => {
            return celulas[index].classList.contains(jogadorAtual)
        })
    })
}

const checadorEmpate = () => {
    return [ ... celulas].every((campo) => {
       return campo.classList.contains('x') || campo.classList.contains('o')
    })
}

function marca(campo, addClass) {
    campo.classList.add(addClass)
}

function boardHover() {
    board.classList.remove('o')
    board.classList.remove('x')

    if (vezDoCirculo) {
        board.classList.add('o')
    } else {
        board.classList.add('x')
    }
}

const mudaTurno = () =>{
    vezDoCirculo = !vezDoCirculo

    boardHover()
}

const jogada = (e) => {
    //colocar O ou X//
    const campo = e.target
    const addClass = vezDoCirculo ? 'o' : 'x'
    marca(campo, addClass)

    //Verificar Vitória//
    const ehVitoria = checadorDeVitoria(addClass)
    
    //Verificar Empate//
    const empate = checadorEmpate()

    if (ehVitoria){
        endGame(false)
}   else if (empate) {
        endGame(true)
}   else {
        //Mudar os símbolos//
        mudaTurno()
    }    
}

startGame()

reiniciar.addEventListener("click", startGame)