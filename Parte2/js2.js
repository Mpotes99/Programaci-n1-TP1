'use strict' ; 



/*let codigo = '';
let nombre = ''; 
let categoria = ''; 
let precio = '';
let descripcion = '';  */

let mostrarInfo = ''; 

let x = 0; 

function cargarProducto(){ 
    let mostrarForm =
     `<form> 
     <input type= "text" class= "Inputs" id="codigo" placeholder="Codigo del producto">     
     <input type= "text" class= "Inputs" id="nombre" placeholder="Nombre del producto">
     <input type= "text" class= "Inputs" id="categoria" placeholder="Categoria"> 
     <input type= "number" class="Inputs" id="precio" placeholder="Precio">
     <input type= "text" class= "Inputs" id="descripcion" placeholder="Descripcion del producto">
     <input type= "submit" onclick="obtenerDatos();">
     </form>`
     document.getElementById("ContainerForm").innerHTML = mostrarForm ; 
     
}


     
       /* codigo = prompt('Ingrese el codigo del producto') ; 
        nombre = prompt('Ingrese el nombre del producto') ; 
        categoria = prompt('Ingrese la categoria del producto'); 
        precio = parseInt(prompt('Ingrese el precio del producto')) ; 
        descripcion = prompt('Ingrese la descripcion del producto'); */
        let productos= [45, 45, 43, 42]; 

       function obtenerDatos(){ 

        let codigo = ''; 
        let nombre = ''; 
        let categoria = ''; 
        let precio = 0; 
        let descripcion = ''; 

         codigo=document.getElementById("codigo").value; 
         nombre=document.getElementById("nombre").value; 
         categoria=document.getElementById("categoria").value; 
         precio=document.getElementById("precio").value; 
         descripcion=document.getElementById("descripcion").value; 

        productos[x] = [codigo, nombre, categoria, precio, descripcion]; 
       x++;
    }
    console.table(productos);


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
        }else{ 
            mostrarInfo += `<li class="texto"><span>Nombre de producto:</span> <br>${y[z]}</li>`
        }  
    }
    mostrarInfo += `</ul> </div>`
    }
    document.getElementById("Info").innerHTML = mostrarInfo; 
}


console.table(productos); 
