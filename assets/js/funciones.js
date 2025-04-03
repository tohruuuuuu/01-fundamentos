// function saludar() {
//     console.log('hola mundo');
// }


const saludar = function(nombre ) {
console.log('hola ' + nombre);
}// esto es una funcion anonima
//sirve para q no se pueda usar el nombre de la variable 
// dos veces


saludar('sebastian');


const saludarFlecha = (nombreFlecha) => {
    console.log('hola ' + nombreFlecha);
}

saludarFlecha("flechaVeloz");