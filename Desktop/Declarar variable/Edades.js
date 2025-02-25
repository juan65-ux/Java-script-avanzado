for (let i = 0; i < 5; i++) {
    let edad = parseInt(prompt("Ingrese su edad"));

    if (edad >= 18) {
        alert("Edad: " + edad + " Eres Mayor de Edad");
    } else {
        alert("Edad: " + edad + " Eres Menor de Edad");
    }
}
// SEGUNDO EJEMPLO
let Numperson  = 0;
 do {
   let nombre = prompt("Ingrese su nombre");
   let edad = parseInt(prompt("Ingrese su edad"))
    
   if (edad >= 18) {
         alert(nombre + " Usted es MAYOR DE EDAD")
    }else{
        alert(nombre + " Usted es MENOR DE EDAD")
    }  
     Numperson ++;


 } while (Numperson < 5);