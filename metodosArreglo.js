const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];
// agregue el map para que devolviera solo los nombres de los productos, sin el map regresa los objetos
 let productoMenores100 = productos.filter(producto => producto.precio < 100)//.map(producto => producto.nombre)
//console.log(productoMenores100);

let ordenarProductosalfabetica = productos.sort((a ,b) => {
    let nom1 = a.nombre.toLowerCase(); // ignorar la distincion entre masyusculas y minisculas
    let nom2 =b.nombre.toLowerCase();  // ignorar la distincion entre masyusculas y minisculas

    if(nom1  < nom2){
        return -1; // nom 1 (a) va antes (es mas pequeño que nom2 por eso el -1)
    } else if (nom1 > nom2){
        return 1; //nom 1 (a) va depues ( es mas grande que nom2  por eso 1)
    }else{
        return 0; // el valor de a y b son iguales
    }
});
//console.log(ordenarProductosalfabetica);

let nombresProductos =  productos.map(producto => producto.nombre);
//console.log(nombresProductos);



// mostrar productos mayores a 100, ordenados alfabeticamente y que sea solo su nombre
let mayores100 = productos.filter(producto => producto.precio > 100).map( producto => producto.nombre).sort((a ,b) =>{
    let prod1 = a.toLowerCase();
    let prod2 = b.toLowerCase();

    if(prod1 < prod2){
        return -1;
    }else if (prod1 > prod2){
        return 1;
    }else{
        return 0;
    }
});
//console.log(mayores100);

//opt

let totalPrecios = productos.reduce((acum , total) => acum + total.precio, 0);
//console.log(totalPrecios);

// alguno tiene caracteristica electronica e incluye celujlar

let incluyeCel = productos.some(producto => producto.categoria === 'Electrónica' && producto.nombre === 'Celular')
console.log(incluyeCel);
