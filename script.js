let num1 = parseFloat(prompt("Pon aquí el primer número:"));
let num2 = parseFloat(prompt("Pon aquí el segundo número"));
if (num1>num2) {
    alert("El primer número es mayor")
}
else if (num1<num2){
    alert("El segundo número es mayor")
}
else if(num1==num2){
    alert("Los dos números son iguales")
}
if (num2 % 2 == 0){
    alert("El segundo número es par")
}
else{
    alert("El segundo número es impar")
}