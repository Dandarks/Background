var bC = document.getElementById("corpo");
var ranColor = document.getElementById("randomColor");
var interval;


document.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const btn = document.querySelector("#change");
        btn.click();
    }
})

function buttonClick (color){
    bC.style.backgroundColor = color;
    ranColor.style.display = "none";
    bC.style.transition = "background-color 1.3s";
    clearInterval(interval);
}

function clique () {
    clearInterval(interval);
    bC.style.backgroundColor = "black";
    ranColor.style.display = "none";
    bC.style.transition = "background-color 1.3s";
}

function randomColor () {
    clearInterval(interval);
    var random = Math.floor(Math.random()*16777215).toString(16);
    bC.style.backgroundColor = "#" + random;
    let c = document.getElementById("color").innerHTML = "#" + random;
    ranColor.style.display = "block";
    ranColor.innerText = c.toUpperCase();
    bC.style.transition = "background-color 1.3s";
}

function automatic () {
    interval = setInterval(changeAutomatic, 1500);
}

function changeAutomatic () {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    bC.style.backgroundColor = color;
    ranColor.style.display = "block";
    ranColor.innerText = color.toUpperCase();
    bC.style.transition = "background-color 1.3s";
}

function changeBg () {
    clearInterval(interval);
    color = document.getElementById("color").value;
    bC.style.backgroundColor = color;
    ranColor.style.display = "none";
    bC.style.transition = "background-color 1.3s";;
    document.getElementById("color").value = "";
}
