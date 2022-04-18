const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn")
const colortext = document.querySelector("#textocor")
var divColor = document.querySelector("#wall")

btn.addEventListener("click", function(){
    let hexColor = "#"
    for (let i = 0; i < 6; i++){
    hexColor += hex[numeroRandomico()]
}

    colortext.textContent = hexColor
    divColor.style.backgroundColor = hexColor

})

function numeroRandomico() {
    return Math.floor(Math.random() * hex.length)
}