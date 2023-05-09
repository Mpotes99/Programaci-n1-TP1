
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
//agregamos los datos que ingreso al array productos con push
    productos.push(producto);

    let continuar = prompt("¿Desea cargar otro producto? (s/n)").toLowerCase();
    if (continuar !== "s" && continuar !== "si") {
    break;
    }
    } while (true);

    alert("Productos cargados correctamente.");
}

//muestra la lista de produc. cargados
function verProductos() {
    //Si no hay datos en producots muestra:
    if (productos.length === 0) {
        alert("No hay productos cargados.");
    //y si no muestra lo cargado
    } else {
        let listaProductos = "";
//i el contador inicializao en 0
//i++ aumenta el valor para seguir al otro arrays
    for (let i = 0; i < productos.length /* */ */; i++) {
        // la n es para el salto de linea y que quede ordenado
        listaProductos += `Código: # ${productos[i].codigo}\n`;
        listaProductos += `Nombre: ${productos[i].nombre}\n`;
        listaProductos += `Categoría: ${productos[i].categoria}\n`;
        listaProductos += `Precio: $ ${productos[i].precio}\n`;
        listaProductos += `Descripción: ${productos[i].descripcion}\n\n`;
    }
    alert(listaProductos);
    }
}