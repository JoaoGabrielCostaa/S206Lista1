import { logarNoSite } from "../support/auth"
import { createRandomUser } from "../support/fake-user";

describe('Testar criação de usuário aluno - confianopai.com', () => {
  // antes de cada teste válido, faz login com usuário válido
  beforeEach(() => {
    logarNoSite();
    // espera dashboard carregar
    cy.url().should('include', '/adm/projetos');

    cy.get('[href="/adm/novo-usuario"]').click();
  });

  let fakeUser = createRandomUser();

  it('Teste A: Deve falhar ao criar um usuário com email inválido', () => {
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche campos de cadastro
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.username);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type("invalido");
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.password);
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Por favor, insira um endereço de email válido.').should('be.visible');
  });

  it('Teste B: Não deve ser possível criar um usuário com nome muito grande', () => {
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche campos de cadastro
    const longUsername = 'a'.repeat(Math.floor(Math.random() * (900 - 400 + 1)) + 400);
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(longUsername);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.password);
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.contains('Falha ao criar usuário.').should('be.visible');
  });

  it('Teste C: Deve falhar ao tentar criar um aluno criado anteriormente', () => {
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche campos de cadastro
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.username);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.password);
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.reload();
    //Seleciona tipo de usuário novamente após reload
    cy.get('.sc-dsAqUS').select('Aluno');
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.username);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.password);
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    //Verifica mensagem de erro
    cy.contains('Falha ao criar usuário.').should('be.visible');
  });

  it('Teste D: Não deve ser possível criar uma senha muito grande', () => {
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche campos de cadastro
    fakeUser = createRandomUser();
    const longPassword = 'a'.repeat(Math.floor(Math.random() * (900 - 400 + 1)) + 400);
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.username);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(fakeUser.email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(longPassword);
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    cy.contains('Falha ao criar usuário.').should('be.visible');
  });

  it('Teste E: Os campos devem estar vazios após criar um usuário', () => {
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Gera novo usuário fake
    const newUser = createRandomUser();
    //Preenche campos de cadastro
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(newUser.username);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(newUser.email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(newUser.password);
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    // Aguarda mensagem de sucesso (ajuste conforme a mensagem real)
    cy.contains('Usuário criado com sucesso').should('be.visible');

    // Verifica se os campos estão vazios após o submit
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').should('have.value', '');
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').should('have.value', '');
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').should('have.value', '');
  });

});
