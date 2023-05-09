'use strict'
/*3. Una empresa llamada Noblex se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, solicita que
haya un botón que diga ver televisores y permita mostrar al menos 9
televisores de 50 pulgadas y que muestre:
a. Código del producto.
b. Cantidad de televisores en stock.
c. Foto del producto.
d. Precio del producto.
e. Descripción del producto.
f. Botón de añadir al carrito.
Se pide también un botón que diga ordenar y que muestre los
televisores del menor precio al mayor precio.*/

let televisores = [] ; 

televisores[0] = ["352453", "42", "img/televisor1.jpg", 139.999, "Smart TV 4K UHD Samsung 50'", "Añadir al carrito" ];

televisores[1] = ["4234235", "12", "img/televisor2.jpg", 154.999, "Smart TV 4K 55' LG", "Añadir al carrito"];

televisores[2] =  ["356345", "531", "img/televisor3.jpg", 99.999, "Smart TV Philips 62' FHD", "Añadir al carrito" ];

televisores[3] = ["43657", "12", "img/televisor4.webp", 130.999, "Smart TV 50 4K UHD Philips", "Añadir al carrito"];

televisores[4] = [ "5735245", "32", "img/televisor5.jpg", 53.999, "Smart TV 70' HD Android TV",  "Añadir al carrito"];

televisores[5]  = ["42425245", "52", "img/televisor6.webp", 57.999, "Smart TV 55 HD TCL", "Añadir al carrito"]; 

televisores[6] = ["45245", "60","img/televisor7.jpg", 259.999, "Smart TV 4K 65' LG", "Añadir al carrito"] ; 

televisores[7] = ["46245245", "75", "img/televisor8.jpg", 150.000, "Smart TV Philips 50' HD", "Añadir al carrito"] ; 

televisores[8] = ["4765432", "43",  "img/televisor9.webp", 65.999, "Smart TV 60' FHD TCL", "Añadir al carrito"] ; 


// Función para mostrar televisores
let mostrarInfo = '' ; 

function mostrarTelevisores(){

for(let x of televisores){ 
    mostrarInfo = '<div> <ul>' ;
    for(let z in x){ 
        if(z == 0){ 
            mostrarInfo += `<li> Codigo del producto: ${x[z]} </li> `;
        }else if(z == 1){ 
            mostrarInfo += `<li> ${x[z]} en stock  </li>`;
        }else if(z == 2){ 
            mostrarInfo += `<li> <img src = "${x[z]}" alt = televisor> </img> </li>`;
        }else if( z == 3){ 
            mostrarInfo += `<li> $${x[z]}  </li>`;
        }else if(z == 5){ 
            mostrarInfo += `<li> <button> ${x[z]} </button> </li>`;
        }else{ 
            mostrarInfo += `<li> " ${x[z]} " </li>`;
        }
    } 
    mostrarInfo += '</ul> </div>'
    document.getElementById("televisores-container").innerHTML += mostrarInfo ;
}
}

let mayorPrecio = 0; 
function Ordenar(){ 

for (let x of televisores){ 
    for(let z of x){ 
        if  (z == 3 && z > mayorPrecio){ 
            
        }
    }
}

}
