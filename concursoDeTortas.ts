import* as rts from 'readline-sync';

let cantConcursantes: number = rts.questionInt ("ingrese la cantidad de participantes que participan de este concurso");
let puntajeGanador: number = 0;
let hayEmpate: boolean = false;

determinarGanador ();

function determinarGanador () {
  let participanteGanador: number = 0; 
  
  while (cantConcursantes > 0) {
   let puntaje: number = obtenerPuntaje (); 

   if (puntajeGanador < puntaje){
      puntajeGanador = puntaje;
      participanteGanador++; 
   } else if (puntajeGanador === puntaje) {
       hayEmpate = true;
     }
    cantConcursantes--; 
  }

  if (hayEmpate) {
    console.log ("hay empate para el puntaje " + puntajeGanador); 
  } else {
    console.log (" el puntaje ganador es de " + puntajeGanador + " para el puntaje " + puntajeGanador); 
  } 
}

function obtenerPuntaje () {
   let sabor: number = 0;
   let presentacion: number = 0;
   let dificultad: number = 0; 

   //el bucle finaliza cuando todos lo valores sean mayores a 1 o menores a 5
   while (sabor < 1 || sabor > 5 || presentacion < 1 || presentacion > 5 || dificultad < 1 || dificultad > 5) {
       if (sabor < 1 || sabor > 5 || presentacion < 1 || presentacion > 5 || dificultad < 1 || dificultad > 5) {
           console.log("la calificacion ingresada debe ser entre el 1 y el 5, intente nuevamente")
           sabor = rls.questionInt ("Ingrese la calificacion del 'sabor'");
           presentacion = rls.questionInt ("Ingrese la calificacion de la 'presentacion'");
           dificultad = rls.questionInt ("Ingrese la calificacion de la 'dificultad'");
       } 
   } 
   
   return (sabor+presentacion+dificultad);  
}
