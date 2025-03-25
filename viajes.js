// viajes.js
// Array para guardar los destinos
const destinos = [];
// Función para registrar un destino de viaje
// ya que se ocupa en la app (otro doc) se exporta
export function registrarDestino(destino, fecha, transporte, personas) {
    // TODO: Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte),
        descuento: calcularDescuento(personas)
    };
    destinos.push(nuevoViaje);
}
// Función para calcular el costo del viaje
function calcularCosto(destino, transporte) {
    let costoBase = 0;
    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if ( destino === 'Egipto'){
        costoBase = 550;
    } else if (destino === 'Cancun'){
        costoBase = 300;
    }
    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if( transporte === 'Camion'){
        costoBase += 50;
    } else if (transporte === 'Barco'){
        if(destino === 'Londres' || destino === 'Egipto'){
            costoBase += 150;
        }else{
            alert (' No aplica')}}
    return costoBase;
}
// Función para hacer un descuento conforme al numero de personas
function calcularDescuento(numPersonas){
    if( numPersonas >= 3 && numPersonas <5){
        costoBase = costoBase * 0.95;
    } else if (numPersonas >=5 && numPersonas <7){
        costoBase = costoBase * 0.90;
    } else if(numPersonas >= 7 && numPersonas < 10){
        costoBase = costoBase * 0.85;
    }else if( numPersonas <= 10) {
        costoBase = costoBase * 0.80;
    }
    return costoBase
}

// Función para mostrar el itinerario de los viajes registrados
//ya que se ocupa en la app (otro doc) se exporta
 export function mostrarItinerario() {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    destinos.forEach(viaje => {
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
        console.log('Costo con descueto' + viaje.calcularDescuento );
        
    })}