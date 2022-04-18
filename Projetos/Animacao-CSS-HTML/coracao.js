var speed = document.getElementById("speeds2")
var velocidade = document.getElementById("velocidade")
var size = document.getElementById("sizes2")
var tamanho = document.getElementById("tamanho")
var coracao = document.querySelector("#heart")

velocidade.innerHTML = speed.value
tamanho.innerHTML = size.value


speed.oninput = function(){
    velocidade.innerHTML = this.value
}

size.oninput = function(){
    tamanho.innerHTML = this.value
}

speed.addEventListener("mousemove", function(){
    var xspeed = speed.value
    var yspeed = `batida ${xspeed}s infinite;`;
    console.log(yspeed)
    coracao.style.animation = yspeed
})