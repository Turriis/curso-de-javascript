/*
    Un array te permite meter valores en los elementos de una variable tipo arreglo.

    Es importante recordar que el primer valor introducido en el array empieza con 0, no con 1.
    
    El índice o llave es el número del elemento, el primer elemento tiene como número de llave 0.





*/

let num = [5, 4, 3]

console.log(`O resultade é: ${num}`)

console.log(num[0])     //Mostrará el valor en la posición 0, que es el número 5.

num[3]=6    //En el elemnto 3 se agregará el valor 6.

num.push(7)     //Coloca en el último elemento del array el valor escrito

num.length  //Indica cuantos elementos tiene el array. Aquí si lo indica empezando con el índice 1.

num.sort()    //Te acomoda los valores en los elementos en orden creciente.

console.log(`O resultade é: ${num}`)
console.log(num.length)

for(let pos=0; pos < num.length; pos++ ){  //Ejercicio para usar los arrays
    console.log(num[pos])

}

let valores = [8, 1, 7, 4, 2, 9]

for(let pos = 0; pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}

num.indexOf(7)  //Te permite identificar el elemento en donde esta el valor escrito en el array especificado.

//Si sale un -1 en el resultado, significa que JS no encontró el valor y así demuestra que ese valor noe xiste en el arrya.