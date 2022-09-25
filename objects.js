miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalleDelAuto();

console.log(miAuto.marca);

// Funcion Constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020)

console.log(autoNuevo);

var autoNuevo2 = new auto("Tesla", "Modelo x", 2018)
var autoNuevo3 = new auto("Toyota", "Corolla", 2020)

console.log(autonNuevo, autoNuevo2, autoNuevo3)