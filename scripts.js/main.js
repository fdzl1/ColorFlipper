const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const rn1 = (getRandomNumber()).toString();
    const rn2 = (getRandomNumber()).toString();
    const rn3 = (getRandomNumber()).toString();
    document.body.style.backgroundColor = "rgba(" + rn1 + ", " + rn2 + ", " + rn3 + ")";
    color.textContent = "rgba(" + rn1 + ", " + rn2 + ", " + rn3 + ")";

})



function getRandomNumber() {
    return Math.round(Math.random() * 256);   
}