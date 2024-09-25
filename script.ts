import* as rls form 'readline-sync'; 

determinarGanador(); 

determinarGanador () {
   let puntajeGanador: number = 0;
   let participanteGanador: number = 0;
   let cantConcursantes: number = rls.questionInt ("Ingrese el numero de participantes que participaron de este concurso");
   let listaDeConcursantes: number = new Array (cantConcursantes); 

   for (let pos: number = 0; pos < cantConcursantes; pos++) {
      listaDeConcursantes [pos] = calcularPuntaje (); 
   }

   for (let pos: number = 0; pos < cantConcursantes; pos++) {
      if (puntajeGanador < listaDeConcursantes [pos)){ 
         puntajeGanador = listaDeConcursantes [pos]; 
         participanteGanador = (pos+1);  
      }
   }

   if (hayEmpate (puntajeGanador, listaDeConcursantes, cantConcursantes){
      console.log ("se produjo un empate con el participante numero " + participanteGanador);
   } else {
      console.log ("el ganador del concurso es el participante numero " + participanteGanador + " con un puntaje de " + puntajeGanador);
   } 
}

function calcularPuntaje () {
   let sabor: number = 0;
   let presentacion: number = 0;
   let dificultad: number = 0; 

   while ((sabor < 1 && sabor > 5) && (presentacion < 1 && presentacion > 5) && (dificultad < 1 && dificultad > 5)) {
       if ((sabor < 1 && sabor > 5) && (presentacion < 1 && presentacion > 5) && (dificultad < 1 && dificultad > 5)) {
           sabor = rls.questionInt ("Ingrese la calificacion del 'sabor'");
           presentacion = rls.questionInt ("Ingrese la calificacion de la 'presentacion'");
           dificultad = rls.questionInt ("Ingrese la calificacion de la 'dificultad'");
       } else {
         console.log("la calificacion ingresada debe ser entre el 1 y el 5, intente nuevamente");
        }
      
     return (sabor+presentacion+dificultad); 
   
  }

function hayEmpate (puntajeGanador, listaDeConcursantes, cantConcursantes) {
   let esEmpate: boolean = false; 

   for (let pos: number = 0; pos < cantConcursantes; pos++) {
       if (puntajeGanador === listaDeConcursantes [pos]) {
          esEmpate = true;
       }
   }
      return esEmpate; 
}
