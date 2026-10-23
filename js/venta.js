function calcular(){
    let cantidad = parseInt(document.getElementById("cantidad").value)
    let precio = parseInt(document.getElementById("precio").value)
    let subtotal = precio * cantidad
    document.getElementById("subtotal").value=subtotal;
    let IVA = subtotal * 0.19
    document.getElementById("IVA").value=IVA;
    let descuento = subtotal * 0.10
    document.getElementById("descuento").value=descuento
    let total_a_pagar= (subtotal + IVA)-descuento
    document.getElementById("total a pagar").value=total_a_pagar
}