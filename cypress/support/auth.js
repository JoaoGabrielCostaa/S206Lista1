const nome = 'lara@' // nome de usuário padrão
const senha = '123' // senha padrão
const url = "https://confianopai.com/login" // url da aplicacao

export function logarNoSite() {
  //Fazendo o teste do Login
  cy.visit(url)

  //Adicionando o nome de usuário e a senha
  cy.get(':nth-child(2) > .sc-ktwOfi').type(nome)
  cy.get(':nth-child(3) > .sc-ktwOfi').type(senha)

  //Clicando para no botão
  cy.get('.sc-csKJxZ').click()
}