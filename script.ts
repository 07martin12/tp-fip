import* as rls form 'readline-sync'; 

let listaConcursantes: number = obtenerDatos(); 
calificacionXParticipante (); 

function obtenerDatos() 
   let sabor: number = 0;
   let presentacion: number = 0;
   let dificultad: number = 0; 
   let cantConcursantes: number = rls.questionInt ("Ingrese el numero de participantes que participaron de este concurso");
   let listaCalificaciones: number = new Array (cantConcursantes);

   for (let pos: number = 0; pos<cantConcursantes; pos++){
     while ((sabor < 1 && sabor > 5) && (presentacion < 1 && presentacion > 5) && (dificultad < 1 && dificultad > 5)) {
       if ((sabor < 1 && sabor > 5) && (presentacion < 1 && presentacion > 5) && (dificultad < 1 && dificultad > 5)) {
           sabor = rls.questionInt ("Ingrese la calificacion del 'sabor' para el participante numero " + (pos+1));
           presentacion = rls.questionInt ("Ingrese la calificacion de la 'presentacion' para el participante numero " + (pos+1));
           dificultad = rls.questionInt ("Ingrese la calificacion de la 'dificultad' para el participante numero " + (pos+1));
       } else {
         console.log("la calificacion ingresada debe ser entre el 1 y el 5, intente nuevamente");
       }

     listaCalificaciones [pos] = calcularPuntaje (sabor, presentacion, dificultad);
   }
     return listaCalificaciones; 
}

function calcularPuntaje (sabor, presentacion, dificultad) {
  return (sabor+presentacion+dificultad);
}

function calificacionXParticipante () {

}
