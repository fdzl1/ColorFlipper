

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const rn1 = (getRandomNumber(256)).toString();
    const rn2 = (getRandomNumber(256)).toString();
    const rn3 = (getRandomNumber(256)).toString();
    document.body.style.backgroundColor = "rgba(" + rn1 + ", " + rn2 + ", " + rn3 + ")";
    color.textContent = "rgba(" + rn1 + ", " + rn2 + ", " + rn3 + ")";

})


function getRandomNumber(number) {
    return Math.round(Math.random() * number);   
}


