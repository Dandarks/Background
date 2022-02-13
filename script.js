var bC = document.getElementById("corpo").style.transition = "background-color 1.0s";

function buttonClick (color){
    document.getElementById("corpo").style.backgroundColor = color;
    document.getElementById("randomColor").style.display = "none";
    bC;
}

function clique () {
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("randomColor").style.display = "none";
    bC;
}

function randomColor () {
    var random = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("corpo").style.backgroundColor = "#" + random;
    c = document.getElementById("color").innerHTML = "#" + random;
    document.getElementById("randomColor").style.display = "block";
    document.getElementById("randomColor").innerText = c.toUpperCase();
    bC;
}

function changeColor () {
    color = document.getElementById("color").value;
    document.getElementById("corpo").style.backgroundColor = color;
    document.getElementById("randomColor").style.display = "none";
    bC;
}

function changeBg () {
    color = document.getElementById("color").value;
    document.getElementById("corpo").style.backgroundColor = color;
    document.getElementById("randomColor").style.display = "none";
    bC;
}
