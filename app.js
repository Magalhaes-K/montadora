const { spawnSync } = require("node:child_process");
const path = require("node:path");

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
  const arquivoProlog = path.join(__dirname, "regras.pl");

  const consulta = `verificar(${produto},${quantidade})`;

  const resultado = spawnSync(
    "swipl",
    ["-q", "-s", arquivoProlog, "-g", consulta, "-t", "halt"],
    {
      encoding: "utf8",
      timeout: 10000,
      windowsHide: true,
    },
  );

  if (resultado.error) {
    console.error("Não foi possível executar o SWI-Prolog.");
    console.error(resultado.error.message);
    process.exitCode = 1;
  } else if (resultado.status !== 0) {
    console.error("O Prolog retornou um erro.");
    console.error(resultado.stderr || resultado.stdout);
    process.exitCode = 1;
  } else {
    console.log("=== RESULTADO DA MONTADORA ===");
    console.log(resultado.stdout);
  }
}
