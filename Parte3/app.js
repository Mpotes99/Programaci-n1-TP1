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

let codigos = ["352453", "4234235", "356345", "43657", "5735245", "42425245", "45245", "46245245", "46245245"];

let stock = ["42", "12", "531", "12", "4", "64", "1435", "123", "53"];

let fotos =  ["img/AU7000_50_Shop_01.webp","img/28b9dea1d9f1e07ce69215c29bdf","img/d1121c73ded6266ec57f5b0bdd31.jpg","img/8ceaf934954792eea028e9b44cfd.jpg","img/751a1caba4776b838112bc0724ab.jpg","img/97b837b2979bb9dabc688ad1dd5c.webp","img/f44260d337db554f68f663dd3fcc.webp","img/e03608af218ecbef68b673b0b8cc.jpg","img/51aa5dce9507a3ae536acdc3c7a1.jpg"];

let precios = [139.999, 154.999, 99.999, 130.999, 53.999, 57.999, 259.999, 65.999, 65.999];

let descripcion = ["Smart TV 4K UHD Samsung 50", "Smart TV 4K 55 LG", "Smart TV Philips 43 FHD", "Smart TV 50 4K UHD Philips", "Smart TV 32” HD Android TV", "Smart TV 32 HD TCL", "Smart TV 4K 65 LG", "Smart TV Philips 32 D", "Smart TV 40 Full HD TCL"];

// Función para mostrar televisores

function mostrarTelevisores(){
    let tv= document.getElementById(televisores);
    tv.innerHTML = "";
}
