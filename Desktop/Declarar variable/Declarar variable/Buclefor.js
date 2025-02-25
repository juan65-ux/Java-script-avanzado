/*IMPRIMIR LAS TABLAS DE MULTIPLICAR DEL NUMERO QUE EL USUARIO INGRESE 
HASTA NUMERO EL 10,(UTILIZANDO EL CICLO FOR) MOSTAR EN LA PANTALLA LA SINTAXIS 
EJEMPLO :
    5*1=5
    5*2=10
    5*3=15
    5*4=20
    5*5=25  
    5*6=30
    5*7=35
    5*8=40
    5*9=45
    5*10=50
*/
/*1️⃣ Solicitar un número al usuario*/
let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar:"));
/*Se usa prompt() para pedir un número.*/
/*parseInt() convierte la entrada de texto en un número entero.*/ 

/*2️⃣ Mostrar un título en la consola*/
console.log("Tabla de multiplicar del " + numero);
/*Se muestra un mensaje indicando la tabla de qué número se imprimirá.*/

/*3️⃣ Ciclo for para generar la tabla*/
for (let i = 1; i <= 10; i++) {
    console.log(numero + " * " + i + " = " + numero * i);
} 
/* i = 1 → Inicia el ciclo desde el 1.
i <= 10 → Se ejecuta hasta el 10.
i++ → Incrementa el valor de i en 1 en cada repetición.
Se imprime cada línea de la tabla de multiplicar.*/  









