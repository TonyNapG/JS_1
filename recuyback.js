//recursión y backtraking
//principio recursión: una función se llama así misma
// function contarHasta5(num){
//     if(num > 5){
//         return num
//     }
//     console.log(num);
//     return contarHasta5(num+1)
// }
// contarHasta5(0);

function factorial(num){
    if(num === 0){
        return 1;
    }
     return num * factorial(num -1);
}
console.log(factorial(4));


//backtraking
function permutaciones(cadena){
    const resultado = [];
    function backtrack(camino, usado){
        console.log('Entrando al backtrack');
        console.log('camino actual', camino.join(''));
        console.log('letras usadas', usado);
        
        if (camino.length === cadena.length){
            const  combinacion = camino.join('')
            console.log('Combinacion encontrada:', combinacion);
            resultado.push(combinacion);
            return;
        }

        for(let i = 0; i < cadena.length; i++){
            console.log('entrando al for', i);
            
            if(usado[i]) {
                console.log(`Letra ${cadena[i]} ya fue usada, la ignoramos`);
                continue;
            };

            console.log(`Usamos la letra ${cadena[i]} en la posicion ${i}`);
            camino.push(cadena[i]);
            usado[i] = true;

            backtrack(camino, usado)
            // despues de resolver todas las llamdas de la funcion backtrack y tener una sol (return lo detiene) y continua resolviendo la siguiente parte del for 

            //(**) 
            const removido = camino.pop(); // La ejecución vuelve aquí después del return en la ultima posición (2)
            usado[i] = false
            console.log(usado);
            console.log(`Quitamos la letra ${removido} y liberamos la posicion ${i}`);
            // al ser posición 1 el i++ continua(haciendose 2) lo que hace que se vuelva a meter al for pero ahora con posición 2, lo que hace que se vuelva a llamar al backtracking ...
        }
        console.log('Terminamos esta rama con el camino: ', camino.join(''));
        console.log('---------');
        //sale del for ya que la condición de  i < cadena.lenght ya no se cumple (3 no es menor 3), pero se vuelve a meter al for para resolver lo pendiente en la posicion 1 (**)
    }
    console.log('Iniciando combinaciones para', cadena);
    backtrack([], Array(cadena.length).fill(false))
    console.log('resultado final:', resultado);
}

//permutaciones('abc')



//Es Navidad y estás buscando un regalo específico en una lista de regalos que te dio tu familia. La lista puede ser bastante larga, y para encontrar el regalo que buscas, necesitas usar recursión. 
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];
function buscarRegalo(regalos, nombreRegaloEncontrar, i= 0){
    
    if (i === regalos.length){
        return `${nombreRegaloEncontrar} no esta no la lista`
    }
    if(nombreRegaloEncontrar === regalos[i]){
        return `el ${nombreRegaloEncontrar} se encuentra en la posción ${i}`
    }
    return buscarRegalo(regalos, nombreRegaloEncontrar, i+1);
}

//console.log(buscarRegalo(gifts,'Muñeca'));

