

var agora = new Date()  //Indica que se va a almacenar algo relacionado con una fecha.
var hora = agora.getHours()     // Indica que agora va a agarrar las horas del sistema.



if(hora < 12) {
    console.log(`Son as ${hora}, bom dia!`)

}
else if(hora <= 18) {
    console.log(`Son as ${hora}, boa tarde!`)

}
else {
    console.log(`Son as ${hora}, boa noite!`)

}
