

//Vars
const hexAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let hexNumber = "";



//Functions
btn.addEventListener("click", function(){
    hexNumber = getRandomHexNumber(hexAlphabet);
    console.log(hexNumber);
    document.body.style.backgroundColor = hexNumber;
    color.textContent = hexNumber;
})


function getRandomHexNumber(alphabet) {
    let number = "#"
    for(let n = 0; n < 6; n++){
        number += alphabet[getRandomNumber(15)];
    }
    return number;
}


function getRandomNumber(number) {
    return Math.round(Math.random() * number);   
}

