var display = document.getElementById("display");

function add(numero){
    display.value = display.value + numero;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}