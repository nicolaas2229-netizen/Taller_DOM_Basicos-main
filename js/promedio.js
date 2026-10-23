function promedio(){
let nota1 = parseFloat(document.getElementById("Nota1").value);
let nota2 = parseFloat(document.getElementById("Nota2").value);
let nota3 = parseFloat(document.getElementById("Nota3").value); 
let prom= (nota1+nota2+nota3)/3;
document.getElementById("resultado").value=prom.toFixed(1);
}