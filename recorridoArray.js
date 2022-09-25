var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2500},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

console.log(articulos);

// Filter --> Devuelve todos los elementos del array que cumplan con la condición dada
var articulosFiltrados =articulos.filter(function(articulo) {
    return articulo.costo <= 500;
});

console.log(articulosFiltrados);

// Map --> Recorriendo Articulo
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
})

console.log(nombreArticulos);


// Find --> Devuelve el primer elemento del array que cumpla con la condición dada
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);

// For each --> Ejecuta lo que le definamos una vez por cada elemento de nuestro array
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
})

// Some -->  Comprueba si al menos un elemento del array cumple con la condición que le damos
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
})

