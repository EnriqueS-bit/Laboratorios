//Punto 1
let nombre = "Carlos"; 
let edad = 30; 
let esEstudiante = false; 
console.log("Nombre:", nombre); 
console.log("Edad:", edad); 
console.log("Es estudiante:", esEstudiante); 
//punto 2
let A= 9;
let B= 7;
let Sum= A+B
let Rest= A-B
let Multi= A*B
let Divi= A/B
console.log("la suma es:", Sum); 
console.log("La resta es:", Rest); 
console.log("La multiplicacion es:", Multi); 
console.log("La division es:", Divi)
let Menorq= A<B
let Mayorq= A>B
let Igual= A==B
let Dife= A!=B
let Menoriguq= A<=B
let Mayoriguq= A>=B
console.log("A es menor que B:", Menorq ); 
console.log("A es mayor que B:", Mayorq ); 
console.log("A es igual que B:", Igual); 
console.log("A es diferente que B:", Dife); 
console.log("A es menor o igual que B:", Menoriguq);
console.log("A es mayor o igual que B:",Mayoriguq ); 
//punto 3
let esMayorDeEdad= true
let tieneLicencia= false
y=esMayorDeEdad&&tieneLicencia
o=esMayorDeEdad||tieneLicencia
console.log("capacidad para conducir",y)
console.log("cumple alguna de las 2 condiciones?",o)
//punto 4
let nombreUsuario = prompt("¿Cuál es tu nombre?");
let edadUsuario = parseInt(prompt("¿Cuál es tu edad?"));
let esEstudiante = prompt("¿Eres estudiante? (sí/no)").toLowerCase() === "sí";
let mensaje = `Hola, ${nombreUsuario}.`;
mensaje += ` Tienes ${edadUsuario} años.`;
//Estructura de control
if (edadUsuario >= 18) {
 mensaje += " Eres mayor de edad.";
} else {
 mensaje += " Eres menor de edad.";
}
if (esEstudiante=true) {
 mensaje += " Tienes derecho a un descuento por ser estudiante.";
}
console.log(mensaje);