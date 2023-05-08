
//array productoss donde se guardan los produc que el usuario cargue
let productos = [];
//se ejecuta con el boton
function cargarProducto() {
do {
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

    let continuar = prompt("¿Desea cargar otro producto? (s/n)").toLowerCase();

    if (continuar !== "s" && continuar !== "si") {
    break;
    }
    } while (true);

    alert("Productos cargados correctamente.");
}
