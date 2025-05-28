//Lista 1 - 7 testes de Alunos

import { logarNoSite } from "../support/auth"

describe('6 Testes de Alunos', () => {
  it('Teste 1: Deve criar um novo usuário com sucesso', () => {
    logarNoSite()
    cy.get('[href="/adm/novo-usuario"]').click();
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche campos de cadastro
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('Teste Usuário6');
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type('teste_usuario6@exemplo.com');
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('senha123');
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Usuário criado com sucesso!').should('be.visible');
  });

  it('Teste 2: Deve falhar ao criar um usuário com email já cadastrado', () => {
    logarNoSite()
    cy.get('[href="/adm/novo-usuario"]').click();
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche dados com email já cadastrado
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('Teste Usuário6');
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type('teste_usuario6@exemplo.com');
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('senha123');
    //Tenta criar usuário novamente
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    //Verifica mensagem de erro
    cy.contains('Falha ao criar usuário.').should('be.visible');
  });

  it('Teste 3: Adicionar um segundo membro em um projeto', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para adicionar membro
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    //Preenche email do membro a adicionar
    cy.get('.sc-ppzwM').type('teste_usuario6@exemplo.com');
    //Seleciona cargo "Integrante 2"
    cy.get('.sc-ldgOGP').select('Integrante 2');
    //Confirma adição do membro
    cy.get('.sc-hiTDLB>path').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Projeto atualizado com sucesso!').should('be.visible');
  });

  it('Teste 4: Deletar o segundo membro em um projeto', () => {
    logarNoSite()
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para deletar 3º integrante
    cy.get(':nth-child(3) > .sc-jiaSqj > .sc-hVcFVo > path').click();
    cy.get('.sc-bbxCgr > :nth-child(1)').click();
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Clica no botão de confirmação
    cy.get('[data-cypress-el="true"]').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    cy.contains('Projeto atualizado com sucesso!').should('be.visible');
  });

  it('Teste 5: Adicionar novo membro em um projeto com email repetido e passar', () => {
    logarNoSite()
    //Abre projeto
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para adicionar membro
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    //Preenche email repetido
    cy.get('.sc-ppzwM').type('liviateste@exemplo.br');
    //Seleciona cargo "Integrante 4"
    cy.get('.sc-ldgOGP').select('Integrante 2');
    //Confirma adição
    cy.get('.sc-hiTDLB>path').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Projeto atualizado com sucesso!').should('be.visible');
  });

  it('Teste 6: Adicionar novo membro em um projeto com número do integrante repetido e falhar', () => {
    logarNoSite()
    //Abre projeto
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para adicionar membro
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    //Preenche email diferente
    cy.get('.sc-ppzwM').type('teste_usuario3@exemplo.com');
    //Seleciona cargo "Integrante 1" repetido
    cy.get('.sc-ldgOGP').select('Integrante 1');
    //Confirma adição
    cy.get('.sc-hiTDLB>path').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Verifica mensagem de erro inesperado
    cy.contains('An unexpected error occurred: 500 INTERNAL_SERVER_ERROR "Aluno não cadastrado:liviateste@exemplo.br,teste_usuario3@exemplo.com". Please contact Vitor Oliveira Juliano de Almeida');
  });

  it('Teste 7: Verificar se integrante cadastrado está listado no projeto', () => {
    logarNoSite()
    //Abre projeto
    cy.get('[href="/adm/projetos/534"]').click();
    // Clica na aba de membros do projeto
    cy.contains('liviateste@exemplo.br').should('exist');
  });
});
