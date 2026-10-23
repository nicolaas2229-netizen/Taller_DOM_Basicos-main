function salario(){
    let valor =parseFloat(document.getElementById("valor").value)
    let hora =parseInt(document.getElementById("hora").value)
    let sala = valor * hora
    document.getElementById("resultado").value=sala.toLocaleString()

}