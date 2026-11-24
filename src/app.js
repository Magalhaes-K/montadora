const { consultarEstoque } = require("../services/prologService");

const produtosPermitidos = ["carro", "cadeira", "celular", "portao"];

const produto = (process.argv[2] || "carro").toLowerCase();

const quantidadeTexto = process.argv[3] || "1";
const quantidade = Number(quantidadeTexto);

if (!produtosPermitidos.includes(produto)) {
  console.error("Produto inválido.");
  console.error("Opções: carro, cadeira, celular, portao.");

  process.exitCode = 1;
} else if (
  !/^[1-9]\d*$/.test(quantidadeTexto) ||
  !Number.isSafeInteger(quantidade)
) {
  console.error("A quantidade deve ser um inteiro positivo.");

  process.exitCode = 1;
} else {
  try {
    const resultado = consultarEstoque(produto, quantidade);

    console.log("=== RESULTADO DA MONTADORA ===");
    console.log(resultado);
  } catch (erro) {
    console.error("Erro ao consultar o estoque.");
    console.error(erro.message);

    process.exitCode = 1;
  }
}
