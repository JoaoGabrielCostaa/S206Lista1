//Lista 1 - 6 testes de Projetos

import { logarNoSite } from "../support/auth"

describe('6 Testes de Projetos', () => {
  it('Teste 1: Teste para abrir um projeto e salvar', () => {
    logarNoSite()

    //Abrindo o projeto #8
    cy.get('[href="/adm/projetos/8"]').click()

    //Clicando no botão Salvar Projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click()

    //Texto que deve aparecer quando o botão de Salvar Projeto for pressionado
    cy.get('.Toastify__toast-body').should('contain.text', 'O nome do projeto não pode estar vazio.')
  })

  it('Teste 2: Clicar para modificar o título de um projeto e salvar', () => {
    logarNoSite()

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
    logarNoSite()

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
    logarNoSite()

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
    logarNoSite()

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
    logarNoSite()

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

  describe('Testes adicionais', () => {
  it('Teste 7: Modificar título do projeto #12 e salvar com sucesso', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/12"]').click()
    cy.get('.sc-iCKXBC > [viewBox="0 0 576 512"]').click()
    cy.get('input[name="titulo"]').clear().type('Título Automatizado')
    cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click()
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })

  it('Teste 8: Adicionar descrição no projeto #12 e salvar', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/12"]').click()
    cy.get('textarea[name="descricao"]').clear().type('Descrição inserida via teste automatizado.')
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })

  it('Teste 9: Alterar status e paralela juntos no projeto #12 e salvar', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/12"]').click()
    cy.get('.sc-gUjWJS>.sc-kiTBBF>path').click()
    cy.get(':nth-child(1) > .sc-ldgOGP').select('Sem pendências')
    cy.get(':nth-child(2) > .sc-ldgOGP').select('Projeto teste')
    cy.get('.sc-hiTDLB>path').click()
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body').should('contain.text', 'Projeto atualizado com sucesso!')
  })

  it('Teste 10: Tentar salvar projeto #8 com título vazio', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/8"]').click()
    cy.get('.sc-iCKXBC > [viewBox="0 0 576 512"]').click()
    cy.get('input[name="titulo"]').clear()
    cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click()
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body').should('contain.text', 'O nome do projeto não pode estar vazio.')
  })

  it('Teste 11: Tentar salvar projeto #24 com todos os integrantes removidos', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/24"]').click()
    cy.get(':nth-child(2)>.sc-jiaSqj>.sc-hVcFVo>path').click()
    cy.get('.sc-bbxCgr > :nth-child(1)').click()
    cy.get(':nth-child(1)>.sc-jiaSqj>.sc-hVcFVo>path').click()
    cy.get('.sc-bbxCgr > :nth-child(1)').click()
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body').should('contain.text', 'Erro ao atualizar o projeto.')
  })

  it('Teste 12: Falha ao alterar status com valor inválido no projeto #12', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/12"]').click()
    cy.get('.sc-gUjWJS>.sc-kiTBBF>path').click()
    cy.get(':nth-child(1) > .sc-ldgOGP').select('---')
    cy.get('.sc-hiTDLB>path').click()
    cy.get('.iTLMzn > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body').should('contain.text', 'Erro ao atualizar o projeto.')
  })
})
