'use strict' ; 

function cargarProducto() {
    let codigo = prompt("Ingrese el código del producto:");
    let nombre = prompt("Ingrese el nombre del producto:");
    let categoria = prompt("Ingrese la categoría del producto:");
    let precio = prompt("Ingrese el precio del producto:");
    let descripcion = prompt("Ingrese la descripción del producto:");

    let producto = {
        codigo: codigo,
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        descripcion: descripcion,
};

    productos.push(producto);
    alert("Producto cargado correctamente.");
}