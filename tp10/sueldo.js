let nombre = "fulano"
let apellido = "mengano"
let sueldoActual = 20000
let porcentajeAumento = 25

function aumento(sueldo, aumento){
    return (sueldo*aumento)/100
}

let aumentoSueldo = aumento(sueldoActual, porcentajeAumento)
let sueldoNuevo = sueldoActual + aumentoSueldo
console.log("Hola estimado " + nombre +" "+ apellido);
console.log("en base a su sueldo actual: " + sueldoActual);
console.log("ha recibido un aumento del " + porcentajeAumento + "% :$" + aumentoSueldo)
console.log("su nuevo sueldo es de: " + sueldoNuevo)