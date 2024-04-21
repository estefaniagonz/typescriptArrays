/*Array con 5 nombres de personas */
let nombres:string []=[
    "Juan",
    "María",
    "Pedro",
    "Ana",
    "Lucas"
];

//recorrer el array 
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
};

// imprimir la longitud del array 
console.log("La longitud  del array es " +nombres.length);

                        //ejercicio 2
//crear un array vacio 

let vacio:number []= [];

//agregar al menos 3 elementos al array utilizando diferentes metodos 
vacio.push(18,7,9,34);
console.log(vacio)
//----------------------------
vacio.unshift (20,58,1) 
console.log (vacio)

//eliminar el ultimo elemento del array 
vacio.pop();
console.log (vacio);

//eliminar un elemento en especifico del array por su indice
vacio.splice(3);
console.log (vacio);

//imprimir el array final despues de las modificaciones 
console.log ("El array final es "+vacio);

                        //ejercicio 3

let array: (number | string | boolean)[] = [         
    "Hola",      
    true,        
    "Mundo",     
    false,       
    3.14,       
    "hello",    
    7,          
    true,        
    "azul"
]; 

//buscar un elemento especifico en el array por su valor 
let buscarValor = 3.14;
if (array.includes(buscarValor)) {
    console.log(`Se encontró ${buscarValor} en la posición ${array.indexOf(buscarValor)}`);
} else{
    console.log ("No se encontro el elemento")
}


//Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find)
let elementoBuscado = "Mundo";
let indice = array.indexOf(elementoBuscado);

if (indice !== -1) {
    console.log(`El elemento '${elementoBuscado}' se encuentra en el índice ${indice}`);
} else {
    console.log(`El elemento '${elementoBuscado}' no se encuentra en el array`);
}

                    //ejercicio 4
let numeros:number[]=[
    3,98,11,45,16,1
];

//ordenar el array de forma ascendente 
numeros.sort((a, b) => a - b);
console.log("forma ascendente " +numeros);

//forma descendente
numeros.sort ((a,b)=> b-a)
console.log ("forma descendente " +numeros);

console.log("\nArray después de ordenarlo:");
console.log(numeros);

                //ejercicio 5
//Crea un array con nombres de personas y sus edades
let personas : [string , number] []= 
[["Juan",20], ["María",17], ["Lucas",19]
,["Carlos",15],[ "Ana",18]];

//Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter
const mayoredad=personas.filter(nombreyedad=> nombreyedad[1]>=18).map(nombreed=>nombreed[0]);
console.log("Personas mayores de edad:"+mayoredad);

for (let persona of personas) {
    console.log(`${persona[0]} tiene ${persona[1]} años.`);
}


                    //ejercicio 6

//crea dos array con diferentes elementos 
let primerA: number[] = [1, 2, 3, 4, 5];
let segundoA: string[] = ["Hola", "Mundo", "Amarillo"];

// Combinar los dos arrays en uno solo
let nuevoArray: (number | string)[] = [...primerA, ...segundoA];

console.log(nuevoArray);


                        //Ejercicio 7
// crear un array con elementos duplicados 
let duplicados:number[]=[
    1,2,3,3,4,4,4,4,8,8,1
];

//eliminar los elementos dupllicados 
let  sinDuplicados:number[]=duplicados.filter((valor,indice)=> duplicados.indexOf(valor)===indice );

console.log(sinDuplicados);

                    //ejercicio 8
//crear un array con numeros 
let numero:number []=[
    12,11,89,65,45,24,12,12,98,67
]; 

//encuentra el valor minimo y maximo 
let minimo:number= Math.min (...numero);
let maximo:number= Math.max(...numero);

console.log ("el numero minimo es " +minimo);
console.log("el numero maximo es "+maximo);

                //ejercicio 9
// Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
//Agrupa los elementos del array por el valor de la propiedad común.

let productos = [
    { nombre: "Camisa", color: "Azul", precio: 20 },
    { nombre: "Pantalón", color: "Negro", precio: 30 },
    { nombre: "Camiseta", color: "Azul", precio: 15 },
    { nombre: "Zapatos", color: "Negro", precio: 50 },
    { nombre: "Vestido", color: "Rojo", precio: 40 },
    { nombre: "Bufanda", color: "Rojo", precio: 10 }
];

// Función para agrupar los elementos del array por la propiedad color
function agruparPorPropiedad(array: any[], propiedad: string) {
    return array.reduce((acc, obj) => {
        const clave = obj[propiedad];
        if (!acc[clave]) {
            acc[clave] = [];
        }
        acc[clave].push(obj);
        return acc;
    }, {});
}

// Agrupar los productos por color
let productosAgrupados = agruparPorPropiedad(productos, "color");
console.log("Productos agrupados por color:");
console.log(productosAgrupados);

                            //Ejercicio 10
// Crear un array con elementos de diferentes tipos
let datos: any[] = ["Juan", 25, true, { ciudad: "Madrid", codigoPostal: "28001" }];

// Convertir el array en un objeto
let objetoDatos: { [key: string]: any } = {};

for (let i = 0; i < datos.length; i++) {
    objetoDatos[`propiedad${i + 1}`] = datos[i];
}

console.log("Array convertido en objeto:");
console.log(objetoDatos);

                //ejercicio 11
// Definir la interfaz para el producto
interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidadEnStock: number;
    categoria: string;
}

// Definir el inventario de productos
let inventario: Producto[] = [];

// Función para agregar un nuevo producto al inventario
function agregarProducto(nombre: string, descripcion: string, precio: number, cantidadEnStock: number, categoria: string) {
    let nuevoProducto: Producto = {
        nombre,
        descripcion,
        precio,
        cantidadEnStock,
        categoria
    };
    inventario.push(nuevoProducto);
    console.log("¡Producto agregado!");
}

// Función para listar todos los productos
function listarProductos() {
    console.log("Inventario de productos:");
    inventario.forEach(producto => {
        console.log(`Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: $${producto.precio}, Cantidad en Stock: ${producto.cantidadEnStock}, Categoría: ${producto.categoria}`);
    });
}

// Función para buscar un producto por nombre
function buscarProducto(nombre: string) {
    let productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log(`Producto encontrado - Nombre: ${productoEncontrado.nombre}, Descripción: ${productoEncontrado.descripcion}, Precio: $${productoEncontrado.precio}, Cantidad en Stock: ${productoEncontrado.cantidadEnStock}, Categoría: ${productoEncontrado.categoria}`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para eliminar un producto
function eliminarProducto(nombre: string) {
    let indice = inventario.findIndex(producto => producto.nombre === nombre);
    if (indice !== -1) {
        inventario.splice(indice, 1);
        console.log("¡Producto eliminado!");
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para actualizar la cantidad en stock de un producto
function actualizarCantidadEnStock(nombre: string, nuevaCantidad: number) {
    let producto = inventario.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidadEnStock = nuevaCantidad;
        console.log("¡Cantidad en stock actualizada!");
    } else {
        console.log("Producto no encontrado.");
    }
}

// Agregar nuevos productos al inventario
agregarProducto("Camisa", "Camisa de algodón", 25, 50, "Ropa");
agregarProducto("Pantalón", "Pantalón de mezclilla", 35, 30, "Ropa");
agregarProducto("Zapatos", "Zapatos de cuero", 50, 20, "Calzado");

// Listar todos los productos
listarProductos();

// Buscar un producto por nombre
buscarProducto("Camisa");
