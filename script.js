const mensagem  = "Página carregada com sucesso!";
document.write("<h1>" + mensagem + "</h1>");

var num1 = 20;
var num2 = 10;

document.write("<br><h4>Cálculos com os números ", num1, " e ", num2, ":</h4>");
//cálculos//
document.write("<p>Adição: ", num1, " + ", num2, " = ", (num1 + num2), "</p>");
document.write("<p>Subtração: ", num1, " - ", num2, " = ", (num1 - num2), "</p>");
document.write("<p>Divisao: ", num1, " / ", num2, " = ", (num1 / num2), "</p>");
document.write("<p>Multiplicação: ", num1, " * ", num2, " = ", (num1 * num2), "</p>");

document.write("<br><h4>Comparações entre os números ", num1, " e ", num2, ":</h4>");
//comparações//
if (num1 == num2) {
    var resultado = num1 + " é igual a " + num2;
} else {var resultado = num1 + " é diferente de " + num2;}
document.write("<p>", resultado, "</p>");

if (num1 < num2) {
    var resultado = num1 + " é menor que " + num2;
} else {var resultado = num1 + " é maior que " + num2;}
document.write("<p>", resultado, "</p>");