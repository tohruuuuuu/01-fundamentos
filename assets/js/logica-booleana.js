
const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa False');
    return false;
}


console.warn('not o la negacion');
console.log(true);  //sale true

console.log( !regresaFalse() ); // true

console.warn( 'and' );// true si todos los valores son verdaderos
console.log( true && true );// true
console.log( true && !false );// true

console.log('======');
console.log( regresaFalse() && regresaTrue() );// NO LEE EL AND Y DA FALSE
console.log( regresaFalse() && regresaTrue() );// FALSE

console.log('===&&===');
regresaFalse() && regresaTrue();

console.warn('OR');// para q de true una debe ser true lit
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );// hay un true, regresa un true

console.warn('asignaciones');


