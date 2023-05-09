let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));

let op = prompt(
  "Digite o número da operação que você deseja:\n\n1- Soma \n2- Subtração \n3- Multiplicação \n4- Divisão \n5-Resto da divisão \n"
);

switch (op) {
  case "1":
    result = n1 + n2;
    alert(`A soma entre ${n1} e ${n2} é ${result}`);
    if (result % 2 == 0) {
      alert("O resultado da soma é par");
    } else {
      alert("O resultado da soma é ímpar");
    }
    break;

  case "2":
    result = n1 - n2;
    alert(`A subtração entre ${n1} e ${n2} é ${result}`);
    break;

  case "3":
    result = n1 * n2;
    alert(`A multiplicação entre ${n1} e ${n2} é ${result}`);
    break;

  case "4":
    result = n1 / n2;
    alert(`A divisão entre ${n1} e ${n2} é ${result}`);
    break;

  case "5":
    result = n1 / n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é ${result}`);
    break;

  default:
    alert("Ocorreu algum erro, tente novamente!");
    break;
}

// Para saber se os números são iguais ou diferentes
if (n1 == n2) {
  alert("Os números escolhidos para operação são iguais");
} else {
  alert("Os números escolhidos para a operação são diferentes");
}
