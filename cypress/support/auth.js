import user from "../fixtures/user.json"

const url = "https://confianopai.com/login" // url da aplicacao

export function logarNoSite() {
  //Fazendo o teste do Login
  cy.visit(url)

  //Adicionando o nome de usuário e a senha
  cy.get(':nth-child(2) > .sc-ktwOfi').type(user.usuario)
  cy.get(':nth-child(3) > .sc-ktwOfi').type(user.senha)

  //Clicando para no botão
  cy.get('.sc-csKJxZ').click()
}