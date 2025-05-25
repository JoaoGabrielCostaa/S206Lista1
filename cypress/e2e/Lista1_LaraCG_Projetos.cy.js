//Lista 1 - 6 testes de Projetos 

describe('6 Testes de Projetos', () => {
  it('Teste 1: Teste para abrir um projeto e salvar', () => {
    loginSite()

    //Abrindo o projeto #8
    cy.get('[href="/adm/projetos/8"]').click()
    
    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando o botão de Salvar Projeto for pressionado 
    cy.get('.Toastify__toast-body').should('contain.text', 'O nome do projeto não pode estar vazio.')
  })

  it('Teste 2: Clicar para modificar o título de um projeto e salvar', () => {
    loginSite()

    //Abrindo o projeto #12-Teste2
    cy.get('[href="/adm/projetos/12"]').click()

    //Clicando o botão do bloco de notas ao lado do nome do projeto
    cy.get('.sc-iCKXBC > [viewBox="0 0 576 512"]').click()

    //Clicando o botão para salvar 
    cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click()

    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando o botão de Salvar Projeto for pressionado 
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })

  it('Teste 3: Clicar botão de deletar um integrante da equipe, não deletar ele e salvar', () => {
    loginSite()

    //Abrindo o projeto #12-Teste2
    cy.get('[href="/adm/projetos/12"]').click()

    //Clicando botão para deletar o integrante
    cy.get(':nth-child(2)>.sc-jiaSqj>.sc-hVcFVo>path').click()

    //Clicando o botão para Desfazer
    cy.get('.sc-jPQKUW').click()

    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando o botão de Salvar Projeto for pressionado 
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })

  it('Teste 4: Clicar botão de deletar um integrante da equipe, deletar ele e Salvar', () => {
    loginSite()

    //Abrindo o projeto #24- Gato Robô
    cy.get('[href="/adm/projetos/24"]').click()

    //Clicando botão para deletar um integrante
    cy.get(':nth-child(2)>.sc-jiaSqj>.sc-hVcFVo>path').click()

    //Clicando o botão de Prosseguir
    cy.get('.sc-bbxCgr > :nth-child(1)').click()

    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando botão de Salvar Projeto for pressionado 
    cy.get('.Toastify__toast-body').should('contain.text', 'Erro ao atualizar o projeto. Por favor, tente novamente.')
  })

  it('Teste 5: Clicar no botão para modificação  ou de Status ou Paralela, modificar o Status do projeto e salvar', () => {
    loginSite()

    //Abrindo o projeto #12-Teste2
    cy.get('[href="/adm/projetos/12"]').click()

    //Clicando o botão para modificação ou de Status ou Paralela
    cy.get('.sc-gUjWJS>.sc-kiTBBF>path').click()

    //Modificando o Status do projeto
    cy.get(':nth-child(1) > .sc-ldgOGP').select('Sem pendências')

    //Clicando o botão para salvar a modificação feita
    cy.get('.sc-hiTDLB>path').click()

    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando o botão de Salvar Projeto for pressionado 
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })

  it('Teste 6: Clicar botão de modificação ou de Status ou de Paralela, modificar a Paralela e salvar', () => {
    loginSite()

    //Abrindo o projeto #12-Teste2
    cy.get('[href="/adm/projetos/12"]').click()

    //Clicando o botão para modificação ou de Status ou Paralela
    cy.get('.sc-gUjWJS>.sc-kiTBBF>path').click()

    //Modificando a Paralela
    cy.get(':nth-child(2) > .sc-ldgOGP').select('Projeto teste')

    //Clicando o botão para salvar a modificação feita
    cy.get('.sc-hiTDLB>path').click()

    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando o botão de Salvar Projeto for pressionado 
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })
  
})

//Função para o Login no Site confianopai
function loginSite (){
  //Nome do usuário (fixo)
  let nome = 'lara@'

  //Senha do usuário (fixa)
  let senha = '123'

  //Colocando em uma lista infos_login
  let infos_login = [nome, senha]

  //Fazendo o teste do Login 
  cy.visit('https://confianopai.com/login')

  //Adicionando o nome de usuário e a senha
  cy.get(':nth-child(2) > .sc-ktwOfi').type(nome)
  cy.get(':nth-child(3) > .sc-ktwOfi').type(senha)

  //Clicando para no botão 
  cy.get('.sc-csKJxZ').click()

  //Retornando a informação
  return infos_login
}