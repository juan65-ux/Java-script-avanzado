let nombre = promt("Ingrese su nombre")
let edad = parseInt(promp("Ingrese su edad"));

if (edad >= 18) {
    alert("Hola: " + nombre + " Eres una persona JOVEN");
}else if (edad < 40) {
   alert("Hola: " + nombre + " Eres una persona ADULTA");
}else if (edad < 60) {
    alert("Hola: " + nombre + " Eres un adulto MAYOR"); 
}