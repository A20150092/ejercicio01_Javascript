alert("Bienvenido al restaurante. Esta es tu cuenta  ");
var entrada= parseInt(prompt("Ingresa el costo de entrada  "));
var plato = parseInt(prompt ("Ingresa el costo del plato principal "));
var postre = parseInt(prompt ("Ingresa el costo del postre  "));
alert("Revise los resultados en la consola presionando F12  ");
//Operaciones
var suma= entrada + plato + postre;
var igv= suma * 0.18 ; 
var  costo= igv + suma ;
// Mostrar Resultados
console.log( " El costo de la entrada es  " + entrada);
console.log( " El costo de el plato principal es  " + plato);
console.log( " El costo del postre es  " + postre);
console.log( " El costo total es  " + suma);
console.log("El costo total con igv es " + costo);
