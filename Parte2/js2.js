'use strict' ; 



let codigo = '';
let nombre = ''; 
let categoria = ''; 
let precio = 0;
let descripcion = '';  

let mostrarInfo = ''; 
 
let productos=[]; 
let indice = 0; 

function cargarProducto(){
     do{ 

     
        codigo = prompt('Ingrese el codigo del producto') ; 
        nombre = prompt('Ingrese el nombre del producto') ; 
       categoria = prompt('Ingrese la categoria del producto'); 
       do{
        precio = parseInt(prompt('Ingrese el precio del producto')) ; 
       }while(isNaN(precio))
        
        descripcion = prompt('Ingrese la descripcion del producto'); 
        productos[indice]=[codigo,nombre,categoria,precio,descripcion]; 
       indice = indice + 1;}while(confirm('Desea ingresar otro producto? '))
    }


function verProductos(){ 

    for(let y of productos){ 
        mostrarInfo += `<div> <ul>`
    for(let z in y){ 
        if(z == 0){ 
            mostrarInfo += `<li class="texto"> <span>Codigo de producto:</span><br> ${y[z]} </li>`
        }else if(z == 2){ 
            mostrarInfo += `<li class="texto"> <span>Categoria:</span><br>${y[z]}</li>`
        }else if(z == 3){ 
            mostrarInfo += `<li class="texto"><br><span class="precio">$ ${y[z]}</span> </li>`
        }else if(z == 1){ 
            mostrarInfo += `<li class="texto"><span>Nombre de producto:</span> <br>${y[z]}</li>`
        }  else{ 
            mostrarInfo += `<li class="texto">${y[z]}</li>`
        }
    }
    mostrarInfo += `</ul> </div>`
    }
    document.getElementById("Info").innerHTML = mostrarInfo; 
}


console.table(productos); 