// Ejercicio 2: Conversor de tiempo
// Un aprendiz registró 7.200 segundos de actividad física. Necesita expresarlos en:
// • Minutos.
// • Horas.
// • Días.

// se importa la librería prompt-sync para recibir entradas del usuario
import valores from 'prompt-sync';
// se crea la función para solicitar los segundos al usuario
const tiempo = valores();

// se declara la constante de los segundos
const segundos = parseInt(tiempo('Ingrese la cantidad de segundos: ')) || 7200;

// se realizan las conversiones
let minutos = segundos /60;
let horas = segundos / 3600;
let dias = segundos /86400;

// se muestran los resultados en la consola
console.log(`${segundos} segundos equivalen a:`);
console.log(`${minutos.toFixed(2)} minutos`);
console.log(`${horas.toFixed(2)} horas`);
console.log(`${dias.toFixed(2)} días`);

