
//Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto. El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window.

function palabraMasLarga(text){
    let palabras = text.split(' ');
    let palabraLarga = '';

    for (let i =0; i < palabras.length; i++ ){
        if(palabraLarga.length < palabras[i].length){
            palabraLarga = palabras[i];
        }
    }
    return palabraLarga
}

const text = "JavaScript es un lenguaje de programación increíble para aprender jnfjdnfjdnjfndjfnjfd";
console.log(palabraMasLarga(text));