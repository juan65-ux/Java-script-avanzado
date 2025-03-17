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

/*Arrays
Los arrays (o arreglos) son estructuras de datos
que permiten almacenar múltiples valores en una sola variable.
Son muy útiles cuando necesitas manejar listas de elementos
de manera organizada y eficiente.

Hasta ahora hemos visto
algunos tipos de datos. Cadenas de texto,
números, booleanos... Pero... ¿Qué pasa si queremos
tener una colección de ellos? En JavaScript tenemos los arrays.

¿Para qué sirven los arrays?
✅ Almacenar múltiples valores en una sola variable.
✅ Acceder a los elementos fácilmente usando índices.
✅ Recorrer la lista con bucles para procesar los datos.
✅ Organizar y manipular datos mediante métodos como agregar,
eliminar o modificar elementos.*/


/*Declaración y asignación de arrays
Para declarar un array usamos los corchetes [] y dentro
los elementos de la colección separados por comas ,.

Por ejemplo, para crear una colección de números del 1 al 5:*/
[1, 2, 3, 4, 5]

/*Los elementos de un array pueden ser de cualquier tipo,
incluso otros arrays.*/
[1, 2, 3, 4, [5, 6, 7, 8, 9]]

/*Y, aunque no siempre sea recomendable,
puedes mezclar tipos de datos dentro:*/
['uno', 2, true, null, undefined]

/*Para asignar un array a una variable,
lo hacemos igual que con los otros tipos de datos:*/
const numbers = [1, 2, 3, 4, 5]
let names = ['Dani', 'Miguel', 'Maria']

/*Acceso a los elementos de un array*/
/*Para acceder a los elementos de un array usamos
los corchetes [] y dentro el índice del elemento que queremos acceder.
Los índices empiezan en 0.

El índice es la posición del elemento dentro del array.
El primer elemento tiene índice 0, el segundo índice 1,
el tercero índice 2...*/
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0]) // 1
console.log(numbers[2]) // 3

/*Si intentamos acceder a un elemento que no existe nos devuelve undefined*/
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[10]) // undefined
/*Puedes usar variables para acceder a los elementos de un array.*/
const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // 3
/*Modificar elementos de un array
Igual que podemos acceder a los elementos de un array,
podemos modificarlos.*/
const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // [10, 2, 30, 4, 5]

/*WOW ¿Cómo es que pese a que hemos indicado que 
es una constante const podemos modificar el Array?
Aunque hay una explicación mucho más larga, que veremos más adelante,
la respuesta corta es que const sólo impide que se reasigne el valor
de la variable, no que se modifique el valor en sí.*/

/*METODOS y propiedades de Array:
Los metodos nos ayudan a trabajar de manera mas eficiente o permiten gestionar, 
transformar y manipular datos de manera eficiente.

🚀 Ventajas de Usar Métodos en Arrays
✅ Hacen el código más corto y legible
En lugar de usar un for, puedes usar forEach(), map(), filter(), etc., 
lo que hace que el código sea más claro y fácil de mantener.

✅ Mejoran la eficiencia
Algunos métodos como filter() y map() crean nuevos
arrays sin modificar el original, lo que evita errores inesperados.

✅ Evitan escribir código manualmente
Métodos como sort(), reverse(), concat(), etc.,
facilitan la manipulación de datos sin necesidad 
de escribir funciones desde cero.*/

/*La longitud de un array
Puedes conocer la longitud de una colección de elementos
usando la propiedad .length:*/

const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length) // 4
/*También puedes cortar su longitud asignando un nuevo
valor a la propiedad .length:*/

const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length = 2

console.log(frutas) // ["manzana", "pera"]
console.log(frutas.length) // 2
/*Métodos de arrays
Cuando trabajamos con colecciones de elementos,
vamos a querer hacer cosas con ellos. Por ejemplo:
añadir un elemento, eliminarlo, buscarlo, etc.
Para ello, los arrays tienen una serie de métodos
que nos permiten hacer estas operaciones:

.push()

El método .push() nos permite añadir un elemento al final de un array:*/

const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // ["plátano", "fresa", "naranja"]
/*Además, el método .push() devuelve la nueva longitud del array:*/

const frutas = ["plátano", "fresa"]
console.log(frutas.length) // 2

const newLength = frutas.push("naranja")
console.log(newLength) // 3
console.log(frutas) // ["plátano", "fresa", "naranja"]
.pop()
/*El método .pop() elimina y devuelve el último elemento de un array:*/

const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"
.shift()
/*El método .shift() elimina y devuelve el primer elemento de un array.
Es lo mismo que .pop(), pero con el primer elemento en lugar del último:*/

const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"
.unshift()
/*El método .unshift() añade un elemento al principio de un array. 
Es lo mismo que .push(), pero con el primer elemento en lugar del último:*/

const frutas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "plátano", "fresa", "naranja"]

/*Concatenar arrays*/
/*Podemos concatenar dos arrays usando el método concat().*/

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]

/*Otra forma de concatenar arrays es usando el operador ... (spread operator).
Este operador propaga los elementos de un array. Así que podríamos hacer
lo siguiente:*/

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numbers, ...numbers2]

console.log(allNumbers) // [1, 2, 3, 4, 5]

/*Iteración de Arrays en JavaScript
Ya hemos visto en clases anteriores cómo}
podemos crear bucles con for y while. Con 
estas estructuras de control, y una nueva que
veremos en este clase, podemos también recorrer
cada uno de los elementos de un array.

Además, veremos como los propios arrays 
tienen un método .forEach que nos permite ejecutar
una función para cada uno de los elementos del array.

Bucle while
El bucle while vimos que permitía ejecutar 
un bloque de código mientras una condición
era verdadera. En el caso de la iteración
de arrays, la condición generalmente se basa en el índice del elemento.

Podemos, por ejemplo, crear una variable
con let para guardar un puntero al índice 
del elemento que estamos iterando. En cada
iteración, podemos incrementar el valor de la
variable en 1, para que en la siguiente iteración
se imprima el siguiente elemento.*/

let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}

️/*Arreglos en JavaScript
Concepto
Un arreglo (array) es una estructura de datos que permite almacenar varios valores en una sola variable.
En JavaScript, los arreglos pueden contener diferentes tipos de datos (números, strings, objetos, etc.).*/

/*Ejemplo
js
*/
// Declaración de un arreglo
let frutas = ["🍎", "🍌", "🍓", "🍍"];

// Acceder a elementos del array
console.log(frutas[0]); // 🍎

// Recorrer el array con forEach
frutas.forEach((fruta, index) => {
  console.log(`Índice: ${index}, Fruta: ${fruta}`);
});

// Agregar elementos con push
frutas.push("🍇"); 
console.log(frutas); // ["🍎", "🍌", "🍓", "🍍", "🍇"]

// Eliminar el último elemento con pop
frutas.pop();
console.log(frutas); // ["🍎", "🍌", "🍓", "🍍"]

// Filtrar elementos (Ej: frutas que no sean 🍌)
let sinBanana = frutas.filter(fruta => fruta !== "🍌");
console.log(sinBanana); // ["🍎", "🍓", "🍍"]
️
 /*Programación Orientada a Objetos (POO)
Concepto
La Programación Orientada a Objetos (POO) se basa en el uso de clases y objetos.
 Una clase es una plantilla para crear objetos con características (propiedades) y comportamientos (métodos).*/

/*Ejemplo
js*/

// Definición de una clase
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método para mostrar información
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear objetos de la clase
let persona1 = new Persona("Juan", 25);
let persona2 = new Persona("Ana", 30);

persona1.saludar(); // Hola, soy Juan y tengo 25 años.
persona2.saludar(); // Hola, soy Ana y tengo 30 años.
️/*Manejo de Eventos y el DOM
Concepto
El DOM (Document Object Model) representa la estructura de una página web en forma de árbol.
Podemos modificarlo con JavaScript y manejar eventos como clics o movimientos del mouse.

Ejemplo
html

<!DOCTYPE html>
<html lang="es">
<head>
  <title>Eventos y DOM</title>
</head>
<body>
  <button id="miBoton">Haz clic</button>
  <p id="mensaje"></p>

  <script>
    // Seleccionar elementos del DOM
    let boton = document.getElementById("miBoton");
    let mensaje = document.getElementById("mensaje");

    // Agregar un evento de clic al botón
    boton.addEventListener("click", () => {
      mensaje.textContent = "¡Botón clickeado!";
    });
  </script>
</body>
</html>
Se selecciona el botón y el párrafo con getElementById.
Se agrega un evento de clic que cambia el texto del párrafo.*/
 /*Módulos en JavaScript
Concepto
Los módulos permiten dividir el código en archivos reutilizables.
Se exportan con export y se importan con import.

Ejemplo
📁 archivo: saludo.js (Módulo)
js

export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
📁 archivo: main.js (Importación del módulo)
js

import { saludar } from "./saludo.js";

console.log(saludar("Juan")); // Hola, Juan!
💡 Nota: Para usar módulos, el archivo HTML debe incluir type="module":

html

<script type="module" src="main.js"></script> */


/*Programación Asíncrona
Concepto
La programación asíncrona permite ejecutar tareas sin bloquear 
el flujo principal del código. Se usan callbacks, promesas (Promise) y async/await.

Ejemplo con setTimeout (Callback)
js

console.log("Inicio");

// Tarea asíncrona después de 2 segundos
setTimeout(() => {
  console.log("Esto aparece después de 2 segundos");
}, 2000);

console.log("Fin");
Salida:

nginx

Inicio
Fin
Esto aparece después de 2 segundos
Ejemplo con Promesas (Promise)
js

function descargarArchivo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = true; // Cambia a false para probar el error
      if (exito) {
        resolve("Archivo descargado ✅");
      } else {
        reject("Error en la descarga ❌");
      }
    }, 3000);
  });
}

// Uso de la promesa
descargarArchivo()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));
Ejemplo con async/await
js

async function proceso() {
  console.log("Iniciando...");

  try {
    let resultado = await descargarArchivo();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }

  console.log("Proceso terminado.");
}

proceso();
Salida esperada:

scss

Iniciando...
(Después de 3 segundos)
Archivo descargado ✅
Proceso terminado.*/


