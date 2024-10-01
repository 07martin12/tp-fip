import* as rls form 'readline-sync'; 

const maxArr_1: number = rls.question ("ingrese la longitud que tendra el arreglo numero 1");
const maxArr_2: number = rls.question ("ingrese la longitud que tendra el arreglo numero 2");

let arr_1: number [] = cargarArr(maxArr_1);
let arr_2: number [] = cargarArr(maxArr_2);

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
  let productoArr_1: number = calcularProducto (arr_1);
  let productoArr_2: number = calcularProducto (arr_2);

  return (productoArr_1 + productoArr_2);
}

function calcularProducto (arr: number []) {
  let producto: number = 1;
  
  for (let pos: number = 0; pos < arr.length; pos++) {
      producto *= arr [pos]; 
  }
   return producto; 
}


