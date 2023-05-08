
//array productoss donde se guardan los produc que el usuario cargue
let productos = [];

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

function verProductos() {
    if (productos.length === 0) {
    alert("No hay productos cargados.");
    } else {
    let listaProductos = "";

    for (let i = 0; i < productos.length; i++) {
    listaProductos += `Código: ${productos[i].codigo}\n`;
    listaProductos += `Nombre: ${productos[i].nombre}\n`;
    listaProductos += `Categoría: ${productos[i].categoria}\n`;
    listaProductos += `Precio: ${productos[i].precio}\n`;
    listaProductos += `Descripción: ${productos[i].descripcion}\n\n`;
    }

    alert(listaProductos);
  
}