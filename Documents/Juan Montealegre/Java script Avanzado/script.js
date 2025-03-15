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

/*ARROW FUNCTION*/
/*Las funciones flecha son una forma
más concisa de crear funciones en JavaScript,
y se han vuelto muy populares en los últimos años
debido a su sintaxis simplificada.*/
/*La sintaxis básica de una función flecha es la siguiente:*/

const miFuncionFlecha = () => {
  // código a ejecutar
}

/*son siempre funciones anónimas
y function expressions. Esto significa
que no tienen nombre y que se asignan a una variable.*/

/*En lugar de la palabra clave function, 
utilizamos una flecha => para definir la función. 
También podemos omitir los paréntesis alrededor de los 
parámetros si solo tenemos uno:*/
const saludar = nombre => {
  console.log("Hola " + nombre)
}
/*Ventajas de las funciones flecha*/

/*Sintaxis más concisa: la sintaxis de las
funciones flecha es más corta y más fácil de 
leer que la sintaxis de las funciones regulares,
especialmente cuando se trabaja con funciones de una sola línea.

Return implícito: las funciones
flecha puede devolver el valor de la
expresión sin usar la palabra clave return
cuando son de una sola línea. Esto hace que 
las funciones flecha sean aún más cortas y más fáciles de leer.

Funciones anónimas más legibles: las funciones 
flecha son una forma más legible y concisa de
crear funciones anónimas en JavaScript, lo cual
puede hacer que nuestro código sea más fácil de entender.*/

/*Return implícito*/
/*Cuando una función flecha 
tiene una sola expresión, podemos omitir
las llaves {} y la palabra clave return para
hacerla aún más corta. Esto se conoce como return implícito.*/
// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b
/*En conclusion   la función 
flecha con return implícito 
es mucho más corta y fácil de leer 
que la función regular. Esto es especialmente
útil cuando estamos trabajando con funciones de una sola línea.*/

/*RECURSIVIDAD*/
/*La recursividad es una técnica
de programación que consiste en
que una función se llame a sí misma.*/

/*Ejemplo de recursividad
Vamos a crear una función que cuente desde un número hasta cero.*/
function cuentaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) { return }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero)

  // Y llamamos a la función con el número anterior
  cuentaAtras(numero - 1)
}
/*Si llamamos a la función con el número 3, el resultado será:*/
cuentaAtras(3)
// -> 3
// -> 2
// -> 1
// -> 0

/*La ejecución la veríamos así:*/
cuentaAtras(3) -> (muestra 3)
               \ 
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida
/*¡Cuidado! Si no ponemos la
condición base, la función se llamará
infinitamente y el navegador se quedará bloqueado.
Cuando hacemos recursividad SIEMPRE hay que tener
una condición que haga que la función salga de sí misma.*/
/*Usando recursividad y devolviendo un valor*/
/*La recursividad se usa muchas veces para solucionar algoritmos. Por ejemplo, vamos a crear una función que calcule el factorial de un número.

El factorial de un número es el 
resultado de multiplicar ese número 
por todos los anteriores hasta llegar a 1.
Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120*/
function factorial(n) {
  // Condición base: Si el número es 0 o 1, devolvemos 1
  // y no llamamos a la función de nuevo
  if (n === 0 || n === 1) {
    return 1
  } else {
    // Si el número es mayor que 1, llamamos a la función
    return n * factorial(n - 1)
  }
}

console.log(factorial(5)) // Resultado: 120
console.log(factorial(3)) // Resultado: 6
_________
factorial(3) --------------------------> 6
        \ 
  3 * factorial(2) ---------------> 6
          \
    2 * factorial(1) -----------> 2
            \
      1 * factorial(0) -------> 1
