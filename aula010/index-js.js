/* 
    Un evento es una acción que ejecuta Javascript dependiendo de una condición del HTML
    
    Los más importantes son:
        mouseenter: Hace la acción cuando el mouse entra la parte del HTML en donde se especificó.
        mousemove: Cuando el mouse se mueve (Nos referimos que se ejecutará la acción, así es igual con todas las acciones restantes).
        mousedown: Cuando se pulsa el click.
        mouseup: Cuando se suelta el click del mouse.
        click: Cuando se dá el click rapidamente.
        mouseout: Cuando el mouse sale de la zona especificada.
        

*/

/*
    Los eventos se pueden configurar en HTML o en JavaScript
*/

var a = window.document.getElementById('area')  //Por motivos de memoria es mejor poner las variables fuera del function, mandas a llamar al ID area para crear la función clicar

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)


function clicar() {

    a.innerText = 'Clicou!'     //Innertext muestra en el html un texto
    a.style.background = 'black'    //Se pueden añadir más de una acción por evento.

}


function entrar() {
    
    a.innerText = 'Olá!'    //Al pasar el mouse en el box, se mostrará Olá!
    a.style.background = 'green'

}


function sair() {
    a.innerHTML = 'Sair!'   //Se repite lo que vimos anteriormente.
    a.style.background = 'orange'

}

//Para buscar errores en el código, vas a inspeccionar el elemento en navegador de buscador que uses.