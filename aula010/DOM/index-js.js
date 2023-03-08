/*
    DOM (Document Object Mode) es la representación de los datos de los objetos que componen la esctructura y el contenido de un documento en la web
*/

window.document.write("Olaaa") //DOM es por orden (window -- document -- write)

var corpo = window.document.body //DOM es por orden (window -- document -- body)

/*
    Para recuperar los datos que querramos dependiendo de alguna caracteristica de esta son:
*/

var p1 = window.document.getElementsByTagName('p')[0]   /*Te permite agarrar en la variable el elemento a partir del tag; el parentesis es el tag y los corchetes el número de posición del dato a agarrar.*/

p1.style.color = 'black'    //Indico que la variable p1 cambie de color a negro a traves de DOM style.color (En ese orden)


window.document.write(' Esta escreto asi: ' + p1.innerText) //  Plasmas el texto, así como la variable con el texto que esta dentro agarrado con la función anterior.

/*
    Hay que recordar que en JS, si la herramienta nos pide la pocisión del dato, el primero es el número 0, el segundo 1, etc.
    No se empeieza por el 1 IMPORTANTE.
*/

//---------------------------------------------------------------------------------------

/*
    Se pueden conseguir los elementos por:
        Marca: getElementsByTagName()
        ID: getElementsById()
        Nombre: getElementsByName()
        Clase: getElementsByClassName()
*/

var mensagem = window.document.getElementById('msg')    //Recupera los datos del id msg en el documento html
mensagem.style.background = 'red'   //Cambio el color del fondo con DOM

var nombre = window.document.getElementsByName('otro')[0]
nombre.style.fontSize = '8rem'  //Cambio el tamaño con DOM

//-----------------------------------------------------------------------------------------------

//Y así es el mismo paso con todo las funciones tipo get.

//La forma más recomendable es usando un selector

var d = window.document.querySelector('div#msg')    //Seleccione dentro del mismo parentesis el que yo quise

d.style.fontSize = '8rem'   //Con DOM cambie el tamaño del ID
    
/*
    Un evento es todo lo que puede suceder dentro de una sección div.
    
    Por ejemplo, cuando mueves el mouse a una sección, puede ejecutar un evento; o cuando lo mueves, puedes programar que suceda un evento.
*/

/*
    Los eventos más comunes con el mouse son: 

        mouseenter: Evento cuando entra el mouse a la sección del html.
        mousemove: Cuando el mouse se mueve.
        mousedown: Cuando el mouse hace click.
        mouseup: Cuando se suelta el click del mouse.
        click: Pulsar y soltar rápidamente el click.
        mouseout: Cuando sacas el mouse de la sección seleccionada.


*/