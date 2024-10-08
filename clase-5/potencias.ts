import * as rts from 'readline-sync';

let numero: number = rts.questionInt("ingrese un numero para poder potenciarlo: ");
let exponente: number = rts.questionInt("ingrese el exponente del numero que va a potenciar: ");

if (exponente >= 0) {
    console.log (numero + " elevado a " + exponente + " da como resultado " + potenciarNumero ());
} else {
    console.log ("el exponente debe ser mayor a cero, intente nuevamente");
}

function potenciarNumero () {
    let resultado: number = 0;

    while (exponente >0) {
        resultado += numero*numero;
        exponente--;
    }
    return resultado;
}

