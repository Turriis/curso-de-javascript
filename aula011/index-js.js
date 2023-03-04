
function somar() {
    var tn1 = window.document.getElementById('txtn1')   //Se puede usar de las dos maneras
    var tn2 = window.document.querySelector('input#txtn2')  //Se puede usar de las dos maneras
    var res = window.document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`     //Para usar el ${n} se necesitan usar las comillas `` Ademas se puede usar HTML dentro de la sintaxis de esta linea como la edición strong
}
