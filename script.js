/**
* En javascript su tipado es debil y dinamico
* javascript si tiene tipado, solo que es dinamico
* Tipos primitivos(inmutables): numero
         string
         booleano
         undefined
         null
* Tipos mutables: objetos
*/
/********** Variables */
let firstName = "Daniela"; //comportamiento normal de una variable
const lastName = 'Prado'; //valor de solo lectura.
var isDeveloper = true; //se puede acceder por fuera del scope - no recomendable

const nameUpper = firstName.toUpperCase()

console.log(nameUpper)

const list = [];
list.push(1);
console.log(list)
console.log(list[0])

/**
 * Objetos
 */
const person = {
    name: 'daniela',
    twitter: '@danipra2050',
    age: 33,
    isDeveloper: true,
    links: ['https://google.com', 'https://midu.live']
}
//accediendo con el nombre de la propiedad
console.log(person.twitter)
console.log(person['twitter']) //forma dinamica de acceder al valor de un objeto

/**
 * Funciones
 */
//function expresion, a una constante se le asigna una funcion
const sumar = (num1, num2) => {
    return num1 + num2
}

//funcion declarada
function restar(a, b){
    return a - b
}

console.log("resultado de la funcion sumar:", sumar(1,2))
console.log("Resultado de la funcion restar:", restar(5, 3))


