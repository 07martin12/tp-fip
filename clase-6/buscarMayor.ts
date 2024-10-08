
let arrayEnteros: number [] = [4,7,9,3,1,45,67,23,29,78,11,16];  

let numeroMayor = buscarMayor ();

console.log ("el numero mas grande del arreglo es " + numeroMayor);
evaluarNumero ();

function buscarMayor () {
    let mayor = 0; 

    for (let pos:number = 0; pos < arrayEnteros.length; pos++) {
        if (arrayEnteros[pos]>mayor) {
            mayor = arrayEnteros [pos];
        }
    } 
    return mayor; 
}

function evaluarNumero () {
    if (numeroMayor%2==0) {
        console.log ("el numero es par");
    } else {
        console.log ("el numero es impar");
    }
}