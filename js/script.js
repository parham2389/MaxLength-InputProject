let $ = document
// Variabels
let input = $.querySelector("#userNameInput")
let counter = $.querySelector(".counter")
let maxLengthAttr = input.getAttribute("maxlength")
// Functions
function inputCheker() {
    counter.innerHTML = +maxLengthAttr - input.value.length
}
// Site Codes
input.addEventListener("keyup", inputCheker)