import * as rts from 'readline-sync';

let salarioActual: number = rts.questionInt("ingrese el salario actual del empleado: ");

if (salarioActual > 0 && salarioActual < 15000) {
    console.log("para el sueldo " + salarioActual + " el aumento es del 20% = " + (salarioActual+ ((salarioActual*20)/100)));
} else if (salarioActual > 15001 && salarioActual < 20000) {
    console.log("para el sueldo " + salarioActual + " el aumento es del 10% = " + (salarioActual+ ((salarioActual*10)/100)));
} else if (salarioActual > 20001 && salarioActual < 25000) {
    console.log("para el sueldo " + salarioActual + " el aumento es del 5% = " + (salarioActual+ ((salarioActual*5)/100)));
} else if (salarioActual > 25000) {
    console.log("para el sueldo " + salarioActual + " no hay aumento");
}