<<<<<<< HEAD
# Sistema de Apoio à Fabricação e ao Controle de Estoque

Protótipo desenvolvido para uma montadora fictícia que integra **JavaScript (Node.js)** e **Prolog (SWI-Prolog)** com o objetivo de verificar a disponibilidade de materiais em estoque com base em pedidos de fabricação.

---

## 🚀 Sobre o Projeto

O sistema valida se os recursos disponíveis em estoque são suficientes para fabricar diferentes produtos (como carros, cadeiras, celulares e portões eletrônicos). A lógica de negócios e a base de conhecimento residem no **Prolog**, enquanto a camada de interação com o usuário e o gerenciamento de chamadas externas são controladas pelo **JavaScript**.

### Objetivos Principais
- Implementar uma base de conhecimento em Prolog contendo produtos, materiais e quantidades disponíveis em estoque.
- Calcular a quantidade necessária de materiais por meio de regras lógicas ($Quantidade\ necessária = quantidade\ por\ unidade \times quantidade\ solicitada$).
- Demonstrar a interoperabilidade entre linguagens distintas utilizando o Node.js.
- Identificar materiais insuficientes para atender aos pedidos de produção.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (Node.js):** Responsável por receber os parâmetros de entrada via linha de comando, validar os dados e acionar o processo externo do Prolog através do módulo `child_process` (`spawnSync`).
- **Prolog (SWI-Prolog):** Armazena os fatos referentes ao estoque e à composição dos produtos, executando as regras de inferência lógica.

---

## 📂 Estrutura do Projeto

```text
├── app.js          # Aplicação principal em JavaScript (Node.js) e lógica de integração
├── regras.pl       # Base de conhecimento Prolog (fatos de estoque, materiais e regras)
└── package.json    # Configurações do projeto Node.js
```

---

## ⚙️ Arquitetura e Funcionamento

1. O usuário informa o produto desejado e a quantidade pelo terminal.
2. O JavaScript valida a entrada.
3. O JavaScript inicia o interpretador SWI-Prolog e executa uma consulta parametrizada.
4. O Prolog consulta os fatos e avalia as regras lógicas de estoque.
5. O resultado é capturado pelo Node.js e exibido de forma formatada para o usuário.

---

## 📥 Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão LTS recomendada)
- **SWI-Prolog** (com o comando `swipl` configurado e acessível no PATH do sistema)

---

## 🚀 Como Executar

Clone este repositório, abra o terminal na pasta do projeto e execute os comandos abaixo:

### Exemplos de Teste

**1. Verificação de pedido com falta de estoque (2 carros):**
```powershell
node app.js carro 2
```

**2. Outros produtos cadastrados:**
```powershell
node app.js cadeira 2
node app.js celular 10
node app.js portao 3
```

**3. Validação de entrada inválida:**
```powershell
node app.js avião 2
```

---

## 🔮 Limitações e Melhorias Futuras (Roadmap)

- [ ] Criar uma regra unificada que produza uma decisão final de aprovação integral para o pedido.
- [ ] Gerar um relatório consolidado com todos os materiais em falta.
- [ ] Implementar a baixa automática do estoque após a confirmação da fabricação.
- [ ] Avaliar persistência de dados para manter as alterações de estoque entre execuções.

---

## 👥 Referências

- [Documentação Oficial do Node.js - child_process](https://nodejs.org/api/child_process.html)
- [Documentação Oficial do SWI-Prolog](https://www.swi-prolog.org/Documentation.html)
=======
# montadora
>>>>>>> 6b8891d60e35b48e6013fde79cc6d38938ab0f57
