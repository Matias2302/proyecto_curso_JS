const productos = [];
const agregarProducto = document.querySelector("#enviar");
const agregado = document.querySelector("#agregado");
const nombreProducto = document.querySelector("#nombre");
const precioProducto = document.querySelector("#precio");

//chequeo array de productos, si no existe creo uno vacío
const listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

//muestro la lista en el html
listaProductos.forEach((el)=>{
    let item = document.createElement("p");
    item.innerText = `Nombre producto: ${el.nombre}, Precio: ${el.precio}`
    agregado.append(item)
})
class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

agregarProducto.addEventListener("click", nuevoProducto);
//agregarProducto.addEventListener("click", mostrarProductos);

//Funcion para agregar un producto
function nuevoProducto(){
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;

    const nuevoProducto = new Producto(nombre,precio);
    productos.push(nuevoProducto);
    let item = document.createElement("p");
    item.innerText = `Nombre producto: ${nombreProducto.value}, precio: ${precioProducto.value}`
    agregado.append(item);

//agrego al local storage
    const unProducto = { nombre: nombreProducto.value, precio: precioProducto.value }
    listaProductos.push(unProducto)
    localStorage.setItem('productos', JSON.stringify(listaProductos))
};