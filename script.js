const numero1 = parseInt(prompt("Pon el primer número:"));
const numero2 = parseInt(prompt("Pon el segundo número:"));

if (numero1 > numero2) {
  console.log("El primer número es mayor que el segundo número.");
} else if (numero1 < numero2) {
  console.log("El primer número es menor que el segundo número.");
} else {
  console.log("El primer número es igual al segundo número.");
}
if (numero2 % 2 === 0) {
  console.log("El segundo número es par.");
} else {
  console.log("El segundo número es impar.");
}