//Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.


// function parejaSentarse (lista){
//     let punteroInicio = 0;
//     let punteroSiguiente = 1;
//     while(punteroSiguiente < lista.length){
//        let nombre1 = lista[punteroInicio]
//        let nombre2= lista[punteroSiguiente]
      
//         if(nombre1[0]===nombre2[0]){
//             return (`se sientan juntos ${lista[punteroInicio]} y ${lista[punteroSiguiente]}`)
//         } else {
//             punteroInicio++;
//             punteroSiguiente++;
//         }
//     } return null;
// }

// console.log(parejaSentarse(invitados));
 

//Modificación devuelva todos los que se deben sentar juntos
function parejaSentarse (lista){
    let punteroInicio = 0;
    let punteroSiguiente = 1;
    let resultados =[];
    while(punteroSiguiente < lista.length){
       let nombre1 = lista[punteroInicio]
       let nombre2= lista[punteroSiguiente]
      
        if(nombre1[0]===nombre2[0]){
            resultados.push(lista[punteroInicio]);
            resultados.push(lista[punteroSiguiente]);
        } 

         // Antes de incrementar, verifica si punteroSiguiente está dentro de los límites.
         if (punteroSiguiente +1 < lista.length) {
            punteroInicio++;
            punteroSiguiente++;
          } else {
            break; // Salir del bucle si punteroSiguiente llega al final.
          }
      
    } return (`se sientan ${resultados}`);
}

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
console.log(parejaSentarse(invitados));


//modificación 