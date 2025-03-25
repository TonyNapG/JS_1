let contactos = [ 
    {nombre : 'Angel', puesto: 'coordinadoor', empresa: 'IBM', correo: 'ang@hotmail.com', mobile: '5534653211'},
    {nombre: 'María', puesto: 'desarrollador frontend', empresa: 'Google', correo: 'maria@gmail.com', mobile: '5512345678'},
    {nombre: 'Carlos', puesto: 'diseñador UX',empresa: 'Microsoft', correo: 'carlos@outlook.com', mobile: '5598765432'}
]

// let generarTarjeta = ()=>{
//     for( i =0; i < contactos.length; i++){
//         let tarjeta = `
//          --------------
//          Hola soy ${contactos[i].nombre} en la empresa ${contactos[i].empresa}
//          y tengo el puesto de ${contactos[i].puesto} me puedes contactar a 
//          mi celular o mi correo ${contactos[i].mobile} ${contactos[i].correo}
//          ------------
//          ` 
//         console.log(tarjeta);
//     }
// }
// generarTarjeta();

let generarTarjeta = (contacto)=> {
    return`
    ------------------------
    Hola soy ${contacto.nombre} trabajo en la empresa ${contacto.empresa} 
    y tengo el puesto de ${contacto.puesto} me puedes contactar a mi 
    celular o mi correo ${contacto.mobile} ${contacto.correo}
    -----------------------
    `
}

// for( let i = 0; i < contactos.length; i++){
//     let tarjeta = generarTarjeta(contactos[i]);
//     console.log(tarjeta);
    
// } // utilizar foreach en arreglos :

contactos.forEach(contacto => {
    console.log(generarTarjeta(contacto));
});




///