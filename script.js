function calcular(operacao) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira dois números válidos.");
    return;
  }

  switch (operacao) {
    case '+': resultado = num1 + num2; break;
    case '-': resultado = num1 - num2; break;
    case '*': resultado = num1 * num2; break;
    case '/': 
      resultado = num2 !== 0 ? (num1 / num2) : "Erro: divisão por zero";
      break;
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;

  // Adiciona ao histórico
  const historico = document.getElementById("historico");
  const li = document.createElement("li");
  li.textContent = `${num1} ${operacao} ${num2} = ${resultado}`;
  historico.prepend(li);
}

// Alternar tema
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

