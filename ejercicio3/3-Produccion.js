// Ejercicio 3: Producción de una fábrica
// Una máquina produce 250 piezas por hora.
// En 8 horas de trabajo se necesita calcular:
// • El total de piezas fabricadas.
// • Cuántas cajas de 12 piezas se llenan.
// • Cuántas piezas quedan sueltas.

// se importa la librería prompt-sync para recibir entradas del usuario
import valores from 'prompt-sync';
// se crea la función para solicitar los datos al usuario
const produccion = valores();
// se declaran las constantes de producción
const piezasPorHora = parseInt(produccion('Ingrese la cantidad de piezas producidas por hora: ')) || 250;
const horasDeTrabajo = parseInt(produccion('Ingrese la cantidad de horas de trabajo: ')) || 8;
const piezasPorCaja = parseInt(produccion('Ingrese la cantidad de piezas por caja: ')) || 12;

// se realizan los cálculos
let totalPiezas = piezasPorHora * horasDeTrabajo;
let cajasLlenas = parseInt(totalPiezas / piezasPorCaja);
let piezasSueltas = totalPiezas-(cajasLlenas*piezasPorCaja);

// se muestran los resultados en la consola
console.log(`El total de piezas fabricadas en ${horasDeTrabajo} horas es: ${totalPiezas}`);
console.log(`Se llenan en total ${cajasLlenas.toFixed(0)} cajas de ${piezasPorCaja} piezas`);
console.log(`Quedan sueltas ${piezasSueltas} piezas`);
