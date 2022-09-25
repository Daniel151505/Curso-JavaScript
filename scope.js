//El alcance (scope) de una variable puede ser:
//1- Global:
var miNombre = "Ana";

//2- Local:
function nombre(){
    var miApellido = "Zarate";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Ana Zarate"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.