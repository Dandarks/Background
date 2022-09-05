var bC = document.getElementById("corpo");
var ranColor = document.getElementById("randomColor");

document.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        const btn = document.querySelector("#change");
        btn.click();
    }
})

function buttonClick (color){
    bC.style.backgroundColor = color;
    ranColor.style.display = "none";
    bC.style.transition = "background-color 1.3s";;
}

function clique () {
    bC.style.backgroundColor = "black";
    ranColor.style.display = "none";
    bC.style.transition = "background-color 1.3s";
}

function randomColor () {
    var random = Math.floor(Math.random()*16777215).toString(16);
    bC.style.backgroundColor = "#" + random;
    c = document.getElementById("color").innerHTML = "#" + random;
    ranColor.style.display = "block";
    ranColor.innerText = c.toUpperCase();
    bC.style.transition = "background-color 1.3s";
}

function changeBg () {
    color = document.getElementById("color").value;
    bC.style.backgroundColor = color;
    ranColor.style.display = "none";
    bC.style.transition = "background-color 1.3s";;
    document.getElementById("color").value = "";
}
