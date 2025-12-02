// Ejercicio 4: Estadísticas de calificaciones
// Un aprendiz obtuvo las siguientes 4 notas: 4.5, 3.8, 2.9 y 4.0.
// Se debe calcular:
// • La suma de las 4 notas.
// • El promedio.
// • El resultado de la siguiente operación:
// (nota1 + nota2) * (nota3 + nota4) / 2;

// se importa la librería prompt-sync para recibir entradas del usuario
import valores from 'prompt-sync';
// se crea la función para solicitar las notas al usuario
const estadisticas = valores();

// se declaran las constantes de las notas
const nota1 = parseFloat(estadisticas('Ingrese la primera nota: ')) || 4.5;
const nota2 = parseFloat(estadisticas('Ingrese la segunda nota: ')) || 3.8;
const nota3 = parseFloat(estadisticas('Ingrese la tercera nota: ')) || 2.9;
const nota4 = parseFloat(estadisticas('Ingrese la cuarta nota: ')) || 4.0; 

// se realizan los cálculos
let sumaNotas = nota1 + nota2 + nota3 + nota4;
let promedioNotas = sumaNotas / 4;
let operacion = (nota1 + nota2) * (nota3 + nota4) / 2;

// se muestran los resultados en la consola
console.log(`La suma de las notas es: ${sumaNotas.toFixed(1)}`);
console.log(`El promedio de las notas es: ${promedioNotas.toFixed(1)}`);
console.log(`El resultado de la operación (nota1 + nota2) * (nota3 + nota4) / 2 es: ${operacion.toFixed(2)}`);