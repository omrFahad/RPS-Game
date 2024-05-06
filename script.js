let computer = document.getElementById("computer-choice")
let result = document.getElementById("result")
let choice = document.getElementById("your-choice")
    ; let btn = document.querySelectorAll("button")
let element;
let random;

let cho = btn.forEach((btns) => {
    btns.addEventListener(("click"), (e) => {
        if (e.target.id === "rock") {
            element = "&#9994"
        }
        if (e.target.id === "paper") {
            element = "&#9995"
        }
        if (e.target.id === "scissors") {
            element = "&#9996"
        }
        choice.innerHTML = element;
        randomChoice();
        getResult();

    })

});


function randomChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        random = "&#9994"

    }
    if (randomNumber === 2) {
        random = "&#9995"

    }
    if (randomNumber === 3) {
        random = "&#9996"

    }
    computer.innerHTML = random;
}

function getResult() {
    if (element === "&#9994" && random === "&#9994") {
        result.innerHTML = "it's a draw!"
    }
    if (element === "&#9994" && random === "&#9995") {
        result.innerHTML = "you lose!"
    }
    if (element === "&#9994" && random === "&#9996") {
        result.innerHTML = "you win!"
    }
    if (element === "&#9995" && random === "&#9994") {
        result.innerHTML = "you win!"
    }
    if (element === "&#9995" && random === "&#9995") {
        result.innerHTML = "it's a draw!"
    }
    if (element === "&#9995" && random === "&#9996") {
        result.innerHTML = "you lose!"
    }
    if (element === "&#9996" && random === "&#9994") {
        result.innerHTML = "you lose!"
    }
    if (element === "&#9996" && random === "&#9995") {
        result.innerHTML = "you win!"
    }
    if (element === "&#9996" && random === "&#9996") {
        result.innerHTML = "it's a draw!"
    }
}