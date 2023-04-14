let num1 = parseFloat(prompt("Pon aquí el primer número:"));
let num2 = parseFloat(prompt("Pon aquí el segundo número"));
if (num1>num2) {
    alert("El primer número es mayor")
}
else if (num1<num2){
    alert("El " + num2 + "es mayor que el "+ num1)
}
else if(num1==num2){
    alert("El "+ num1 + "y el " num2 + "son iguales ")
}
if (num2 % 2 == 0){
    alert("El " + num2 + "número es par")
}
else{
    alert("El " + num2 + "número es impar")
}