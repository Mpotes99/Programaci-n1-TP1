'use strict' ; 

let productos = []; 


let codigo = '';
let nombre = ''; 
let categoria = ''; 
let precio = '';
let descripcion = ''; 
let x = 0; 
let mostrarInfo = ''; 

function cargarProducto(){ 
    do{ 
        codigo = prompt('Ingrese el codigo del producto') ; 
        nombre = prompt('Ingrese el nombre del producto') ; 
        categoria = prompt('Ingrese la categoria del producto'); 
        precio = parseInt(prompt('Ingrese el precio del producto')) ; 
        descripcion = prompt('Ingrese la descripcion del producto'); 

        productos[x] = [codigo, nombre, categoria, precio, descripcion] ; 
        x++

    }while(confirm('Desea agregar otro producto?'))
}

function verProductos(){ 

    for(let y of productos){ 
        mostrarInfo += `<div> <ul>`
    for(let z in y){ 
        if(z == 0){ 
            mostrarInfo += `<li> Codigo de producto: ${y[z]} </li>`
        }else if(z == 2){ 
            mostrarInfo += `<li> Categoria: ${y[z]}</li>`
        }else if(z == 3){ 
            mostrarInfo += `<li> $${y[z]} </li>`
        }else{ 
            mostrarInfo += `<li> ${y[z]}</li>`
        }  
    }
    mostrarInfo += `</ul> </div>`
    }
    document.getElementById("Info").innerHTML = mostrarInfo; 
}


console.table(productos); 