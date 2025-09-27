// Insere valores no display
function inserir(valor) {
  document.getElementById("display").value += valor;
}

// Limpa o display (zerar)
function limpar() {
  document.getElementById("display").value = "";
}

// Calcula a expressão
function calcular() {
  let expressao = document.getElementById("display").value;
  try {
    let resultado = eval(expressao);
    document.getElementById("display").value = resultado;
  } catch (e) {
    alert("Expressão inválida!");
  }
}

