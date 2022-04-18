const revisoes = [{
    id: 0,
    nome: "Alan Turing",
    trabalho: "Matemático",
    img: "./imagens/AlanTuring.png",
    texto: "Este portfólio é um dos melhores que já vi na vida, seus códigos são magníficos, funcionam e são indecifráveis."
},
{
    id: 1,
    nome: "Steve Jobs",
    trabalho: "Inventor",
    img: "./imagens/SteveJobs.png",
    texto: "Esse projeto esbanja criatividade, difícil de acreditar que foi feito por apenas uma pessoa dentro do seu quarto."
},
{
    id: 2,
    nome: "Mark Zuckerberg",
    trabalho: "Programador",
    img: "./imagens/MarkZuck.png",
    texto: "Eu nunca vi um projeto acadêmico tão revolucionário, nossos engenheiros estão virando noites para copiá-lo."

},
{
    id: 3,
    nome: "Bill Gates",
    trabalho: "Magnata",
    img: "./imagens/BillGates.png",
    texto: "Talvez esse portfólio não seja o suficiente para salvar o mundo, mas com certeza vai fazer alguém mais rico no futuro."
}]

const imagemAvaliador = document.getElementById("imagemAvaliador")
const autor = document.getElementById("autor")
const trabalho = document.getElementById("trabalho")
const avaliacao = document.getElementById("textoAvaliacao")

const btnAvancar = document.querySelector(".avancar")
const btnVoltar = document.querySelector(".voltar")

let itemAtual = 0

window.addEventListener("DOMContentLoaded", function(){
    mostrarPessoa(itemAtual)
})

function mostrarPessoa(pessoa){
    const item = revisoes[pessoa]
    imagemAvaliador.src = item.img
    autor.textContent = item.nome
    trabalho.textContent = item.trabalho
    avaliacao.textContent = item.texto
}

btnAvancar.addEventListener("click", function(){
    if (itemAtual < 3){
        itemAtual++
        mostrarPessoa(itemAtual)
        } else {
        itemAtual = 0
        mostrarPessoa(itemAtual)
    }
})

btnVoltar.addEventListener("click", function(){
    if (itemAtual > 0){
        itemAtual--
        mostrarPessoa(itemAtual)
        } else {
        itemAtual = 3
        mostrarPessoa(itemAtual)
    }
})