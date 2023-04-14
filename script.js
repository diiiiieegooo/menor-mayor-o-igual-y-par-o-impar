function compararNumeros(numero1, numero2) {
    let resultado = "";
    if (numero1 > numero2) {
        resultado = "mayor";
    } else if (numero1 < numero2) {
        resultado = "menor";
    } else {
        resultado = "igual";
    }
    return resultado;
}

const numero1 = parseInt(prompt("Ingrese el primer número:"));
const numero2 = parseInt(prompt("Ingrese el segundo número:"));

const resultadoComparacion = compararNumeros(numero1, numero2);
console.log(`El primer número es ${resultadoComparacion} que el segundo número.`);

const resultadoParidad = numero2 % 2 === 0 ? "par" : "impar";
console.log(`El segundo número es ${resultadoParidad}.`);
