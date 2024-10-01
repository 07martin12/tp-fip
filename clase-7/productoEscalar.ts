import* as rls form 'readline-sync'; 

const maxArr: number = rls.question ("ingrese la longitud que tendran los arreglos 1 y 2");

let arr_1: number [] = cargarArr(maxArr);
let arr_2: number [] = cargarArr(maxArr);

console.log ("el producto escalar para los arreglos\narr_1: " + publicarArr (arr_1) + "\narr_2: " + publicarArr (arr_2) + "\nes de: " + productoEscalar (arr_1,arr_2)); 

function cargarArr (max:number) {
  let arr: number [] = new Array (max);

  for (let pos: number = 0; pos<arr.length; pos++) {
      let element: number = rls.question ("ingrese un numero para el elemento: " + pos+1);
      arr [pos] = element; 
  }
  return arr;
}

function publicarArr (arr:number []) {
  for (let pos: number = 0; pos<arr.length; pos++) {
    console.log (arr [pos] +"|\r"); 
  }
}

function productoEscalar (arr_1: number [], arr_2: number []) {
  //ambos arreglos poseen la misma longitud
  let producto: number = 1;
  let suma: number = 0; 

  for (let pos: number = 0; pos < arr.length; pos++) {
      producto = arr_1 [pos] * arr_2 [pos]; 
      suma += producto; 
  }
  
  return suma;
}

function calcularProducto (arr: number []) {
      producto *= arr [pos]; 
  }
   return producto; 
}


