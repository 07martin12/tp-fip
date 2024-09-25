import* as rls form 'readline-sync'; 

determinarGanador(); 

determinarGanador () {
   let puntajeGanador: number = 0;
   let participanteGanador: number = 0;
   
   let cantConcursantes: number = rls.questionInt ("Ingrese el numero de participantes que participaron de este concurso");
   let listaDeConcursantes: number = new Array (cantConcursantes); 

   for (let pos: number = 0; pos < cantConcursantes; pos++) {
      //guardo los puntajes de cada participante
      listaDeConcursantes [pos] = calcularPuntaje (); 
   }

   for (let pos: number = 0; pos < cantConcursantes; pos++) {
      //busco el puntaje mas alto y guardo el numero del participante que lo tiene
      if (puntajeGanador < listaDeConcursantes [pos)){ 
         puntajeGanador = listaDeConcursantes [pos]; 
         participanteGanador = (pos+1);  
      }
   }

   if (hayEmpate (participanteGanador, puntajeGanador, listaDeConcursantes, cantConcursantes){
      console.log ("se produjo un empate con el participante numero " + participanteGanador);
   } else {
      console.log ("el ganador del concurso es el participante numero " + participanteGanador + " con un puntaje de " + puntajeGanador);
   } 
}

function calcularPuntaje () {
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

function hayEmpate (participanteGanador, puntajeGanador, listaDeConcursantes, cantConcursantes) {
   let esEmpate: boolean = false; 

   for (let pos: number = 0; pos < cantConcursantes; pos++) {
      //evalua si hay otro puntaje similar al del participante ganador
       if (puntajeGanador === listaDeConcursantes [pos] && pos != participanteGanador) {
          esEmpate = true;
       }
   }
      return esEmpate; 
}
