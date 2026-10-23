function suma(){
let num1 =parseInt(document.getElementById("numero 1").value);
let num2 =parseInt(document.getElementById("numero 2").value);
let sum= num1 + num2;
document.getElementById("resultado").value=sum;
}
function resta(){
let num1 =parseInt(document.getElementById("numero 1").value);
let num2 =parseInt(document.getElementById("numero 2").value);
let rest= num1 - num2;
document.getElementById("resultado").value=rest;
}
function multiplicacion(){
let num1 =parseInt(document.getElementById("numero 1").value);
let num2 =parseInt(document.getElementById("numero 2").value);
let multi= num1 * num2;
document.getElementById("resultado").value=multi;
}
function division(){
let num1 =parseInt(document.getElementById("numero 1").value);
let num2 =parseInt(document.getElementById("numero 2").value);
let div= num1 / num2;
document.getElementById("resultado").value=div;
}
