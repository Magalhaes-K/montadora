const { spawnSync } = require("node:child_process");
const path = require("node:path");

const arquivoProlog = path.join(__dirname, "..", "prolog", "regras.pl");

function consultarEstoque(produto, quantidade) {
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
    throw new Error(
      `Não foi possível executar o SWI-Prolog: ${resultado.error.message}`,
    );
  }

  if (resultado.status !== 0) {
    throw new Error(
      `O Prolog retornou um erro: ${resultado.stderr || resultado.stdout}`,
    );
  }

  return resultado.stdout;
}

module.exports = {
  consultarEstoque,
};
