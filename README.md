# Testes Automatizados para o site [confianopai.com](https://confianopai.com/login)

Este repositório contém testes automatizados utilizando [Cypress](https://www.cypress.io/) para validar os principais casos de uso do site [https://confianopai.com/login](https://confianopai.com/login).

## Objetivo

Garantir a qualidade e o correto funcionamento das funcionalidades de login e gerenciamento de projetos no sistema Confia no Pai.

## Membros do grupo
 - Daniela Maria Barbosa Faria - GEC - 1688
 - João Gabriel Betela da Costa - GES - 193
 - Lívia Cecília Gomes Silva - GEC - 1937
 - Lara Conte Gomes - GEC - 2177
 - Tiago Augusto Costa Carvalho - GEC -

## Estrutura dos Testes

Os testes estão localizados em `cypress/e2e` e cobrem os seguintes cenários:

- **Login no sistema**
- **Abertura e salvamento de projetos**
- **Modificação de título de projetos**
- **Adição e remoção de integrantes da equipe**
- **Alteração de status e paralelas dos projetos**
- **Validação de mensagens de sucesso e erro**

## Como executar os testes

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Execute o Cypress:**

   ```bash
   npm run cypress:open
   ```

   Ou para rodar em modo headless:

   ```bash
   npm run cypress:run
   ```

## Estrutura dos Arquivos

- `cypress/e2e/Lista1_LaraCG_Projetos.cy.js`: Arquivo principal com os testes dos casos de uso.
- `cypress/support/auth.js`: Função utilitária para login automatizado.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) para automação dos testes end-to-end.
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) para geração de relatórios.

## Observações

- Os dados de login utilizados nos testes são fixos:
  **Usuário:** `lara@`
  **Senha:** `123`
- Os testes simulam interações reais de um usuário no sistema, incluindo cliques, preenchimento de campos e validação de mensagens exibidas na interface.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para sugerir melhorias ou adicionar novos casos de teste.

---
