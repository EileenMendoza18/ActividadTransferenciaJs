// Ejercico 1: Calculadora de gastos de viaje
// Un grupo de amigos realiza un viaje con los siguientes costos fijos:
// • Transporte: $120.000
// • Alojamiento: $200.000
// • Alimentación: $150.000
// El total debe dividirse en partes iguales entre 4 personas. Además, cada persona
// entregará $130.000 y se debe calcular el sobrante.

// se importa la librería prompt-sync para recibir entradas del usuario
import valores from 'prompt-sync';

// se crea la función para solicitar los gastos al usuario
const gastos = valores();

// se declaran las constantes de los gastos fijos
const transporte = parseFloat(gastos('Ingrese el costo de transporte: ')) || 120000;
const alojamiento = parseFloat(gastos('Ingrese el costo de alojamiento: ')) || 200000;
const alimentacion = parseFloat(gastos('Ingrese el costo de alimentación: ')) || 150000;

// se calcula el total de gastos, el número de personas y el aporte por persona
let totalGastos = transporte + alojamiento + alimentacion;
const numeroPersonas = parseInt(gastos('Ingrese el número de personas: ')) || 4;
let aportePorPersona = parseFloat(gastos('Ingrese el aporte por persona: ')) || 130000;

// se calcula el sobrante del viaje
let sobrante = (aportePorPersona * numeroPersonas) - totalGastos;

// se muestran los resultados en la consola
console.log(`El total de gastos del viaje es: $${totalGastos}`);
console.log(`Cada persona debe pagar: $${(totalGastos / numeroPersonas).toFixed(2)}`);
console.log(`El sobrante del viaje es: $${sobrante}, cada persona recibe $${(sobrante / numeroPersonas).toFixed(2)}`);
