import * as rts from 'readline-sync';

let entero: number = rts.questionInt("ingrese un numero para saber su tabla de multiplicar: ");
let limite: number = rts.questionInt("ingrese el limite que tendra su tabla de multiplicar: ");

for (let pos: number = 0; pos < limite; pos++) {
    console.log(entero + "*" + pos + "=" + entero*pos);
}