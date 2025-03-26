let lista_de_compras = [];

function agregarProducto(producto){
    if(!lista_de_compras.includes(producto)){
     lista_de_compras.push(producto);
     mostrarLista();
    }else{
        console.log('producto ya se registro');
    }
};
function eliminarProducto(producto){
    const indexProduct = lista_de_compras.indexOf(producto);
    if( indexProduct !== -1){ // si el producto se encuentra eliminalo (si el product es diferemte de -1 fue encontrado)
        lista_de_compras.splice(indexProduct,1);
        mostrarLista();
    }else{
        console.log('producto no encontrado');
        
    }
};

function mostrarLista(){
    if(lista_de_compras.length === 0){
        console.log('la lista esta vacía');  
    } else{
        lista_de_compras.forEach(product => {
            console.log(`- ${product}`);
        });
    }
};


