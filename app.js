alert("Boas vindas ao jogo número secreto!");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
// enquanto o chute não ao n.s.
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 10");
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
    alert(
      `Isso ai! Você descobriu o ${numeroSecreto} com ${tentativas} tentativas.`
    );
  } else {
    if (chute > numeroSecreto) {
      alert(`o número secreto é menor que ${chute}`);
    } else {
      alert(`o número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
  }
}
