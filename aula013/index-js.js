
function calcular() {
    var x = window.document.querySelector('input#x')
    var res = window.document.querySelector('div#res')  //Asigna un espacio en el HTML para el resultado
    var vel = Number(x.value)   //Mando a llamar el valor de x.
    
    res.innerHTML = `Sua velocidade atual é de ${vel}. `  //Plasma el contendio de vel con la variable res a traves del innerHTML
    if (vel >= 70) {
        res.innerHTML += (' Multa!, muito rápido cara.')
    
    } else if (vel < 1) {
        res.innerHTML += (' Error')
    
    }
    else {
        res.innerHTML += (' Você vai muito bem!')
    
}


function multa() {
    var multa = window.document.querySelector('input#x')
    var multa2 = window.document.querySelector('div#multa-html')
    var velo = Number(x.value)




}


}
