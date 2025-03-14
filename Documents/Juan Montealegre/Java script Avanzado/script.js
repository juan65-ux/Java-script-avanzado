/*FUNCIONES:Crea bloques de código reutilizables
 y define parámetros para cambiar su comportamiento.
 Crea bloques de código reutilizables y define parámetros
para cambiar su comportamiento. */

/*forma más común y básica es mediante la palabra clave function.
 Esta es tu primera función:*/

function saludar() {
  console.log('Hola Miguel')
}
/*declarar una función consiste de:

La palabra reservada _function_ que 
indica que estamos definiendo una función.
El nombre de la función, en este caso 
saludar. Normalmente usamos verbos 
para nombrar funciones, ya que son acciones que realizan.
Un par de paréntesis _()_ después del 
nombre. Pueden contener parámetros.
 En este caso, no tenemos ninguno.
Un bloque de código entre llaves _{}_.
 En este caso, solo tenemos una línea de código,
  pero podríamos tener muchas más.*/ 



  /*Las funciones pueden devolver un resultado.
   Para ello, utilizamos la palabra reservada return
y después el valor que queremos devolver:*/ 
function sumar() {
    return 1 + 1
  }

  /*Ahora, cada vez que llamemos a la función sumar,
   nos devolverá el resultado de la suma:*/
  
   // podemos guardar el resultado en una variable
const resultado = sumar()

// o ver en consola directamente el resultado
console.log(sumar()) // -> 2


/* Math, un objeto incorporado en JavaScript
 que tiene propiedades y métodos para constantes
  y funciones matemáticas. Vamos a ver dos métodos
   que nos van a ser muy útiles:

_Math.random()_: devuelve un número aleatorio
entre 0 y 1, con decimales.
_Math.floor()_: redondea un número hacia abajo.
_Math.random_ es parecido a console.log,
en el sentido que son métodos que JavaScript
incorpora de serie y que podemos utilizar 
en cualquier punto de nuestro programa.
*/

/*función que nos devuelva un número aleatorio del 1 al 10:*/

function getRandomNumber() {
    // recuperamos un número aleatorio entre 0 y 1
    const random = Math.random() // por ejemplo: 0.6803487380457318
  
    // lo multiplicamos por 10 para que esté entre 0 y 10
    const multiplied = random * 10 // -> 6.803487380457318
  
    // redondeamos hacia abajo para que esté entre 0 y 9
    const rounded = Math.floor(multiplied) // -> 6
  
    // le sumamos uno para que esté entre 1 y 10
    const result = rounded + 1 // -> 7
  
    // devolvemos el resultado
    return result
  }

  /*Parametros en funciones*/

  /*parámetros. Esto es, que su comportamiento pueda cambiar según los datos que le pasemos.

Imagina que queremos que nuestra función de saludar,
 pueda saludar a cualquier persona, no solo a Miguel.
  Para ello, podemos hacer que la función acepte un parámetro, 
que será el nombre de la persona a la que queremos saludar.*/

function saludar(nombre) {
    console.log("Hola " + nombre)
  }

  /*Ahora, cada vez que llamemos a la función,
   podemos pasarle una cadena de texto:*/

saludar('Miguel') // -> Hola Miguel
saludar('Itziar') // -> Hola Itziar
saludar('Carmen') // -> Hola Carmen

/*para crear una calculadora,
 deberíamos empezar a crear funciones
  que realicen las operaciones básicas.
En este caso necesitaremos parametrizar 
la función para que acepte los dos números
 para hacer la operación.*/

 function sumar(a, b) {
    return a + b
  }
  
  function restar(a, b) {
    return a - b
  }

  /*Y ya podríamos usarlas:*/
  const resultadoSuma = sumar(2, 3)
console.log(resultadoSuma) // -> 5

const resultadoResta = restar(5, 2)
console.log(resultadoResta) // -> 3

/*Parámetros y argumentos
En el ejemplo anterior, 
hemos visto que podemos
 pasarle valores a la función
  cuando la llamamos. 
  A estos valores se les llama argumentos.
  Y a los valores que recibe la función,
   se les llama parámetros.*/

   // la función suma tiene dos parámetros: a y b
function sumar(a, b) {
    return a + b
  }
  
  // cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
    sumar(2, 3) // -> 5 

    /*El orden de los parámetros importa
Algo muy importante, y un error muy común 
al empezar a crear funciones, es olvidar
 que el orden de los parámetros importa.

Vamos a crear una función que simule un microondas.
 Le pasaremos el plato, tiempo y potencia.
  Y nos devolverá el resultado del plato cocinado.*/

  function cocinarMicroondas(plato, tiempo, potencia) {
    if (plato === '🐥' && tiempo === 1 && potencia === 5) {
      return '🍗'
    }
  
    if (plato === '🥚' && tiempo === 2 && potencia === 3) {
      return '🍳'
    }
  
    return '❌ Plato no soportado'
  }



  /*¿Qué es una function expression?
Una function expression es una función
 que se asigna a una variable. Por ejemplo:*/

 // esto es una function expression
const sum = function (a, b) {
    return a + b
  }
  
  // esto es una declaración de función
  function sum(a, b) {
    return a + b
  }


  /*podemos llamar a la función usando el nombre de la variable:*/

sum(1, 2) // 3

/*El comportamiento es 
muy similar al de una función 
declarada con la palabra clave function.
 Sin embargo, hay una diferencia muy importante
  entre ambas que debes conocer: el hoisting.

Hoisting
El hoisting es un término que se usa
 para describir cómo JavaScript parece
  que mueve las declaraciones funciones 
  al principio del código, de forma que 
  las puedes usar incluso antes de declararlas.
   Por ejemplo:*/
   
   sum(1, 2) // 3

function sum(a, b) {
  return a + b
}

/*Lo que está pasando 
es que JavaScript asigna
 en memoria durante la 
 fase de compilación las
  declaraciones de funciones
   y por eso al ejecutarse el
    código tiene acceso a esa
     posición de memoria a la
      que se refiere la función.

Eso sería la explicación técnica
 del hoisting, pero si te sirve de ayuda,
  puedes pensar que es como si JavaScript 
  moviese las declaraciones de funciones
   al principio del código.*/