var frutas = ["Manzana", "Pera", "Naranja", "Platano", "Uva"];

// for
for (i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}: ${frutas[i]}`);
}

// for of
for (e of frutas) {
    console.log(`Elemento ${e}`);
}