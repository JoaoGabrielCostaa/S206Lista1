describe('6 Testes de Alunos', () => {
  it.skip('Teste 1: Deve criar um novo usuário com sucesso', () => {
    loginSite();
    cy.get('[href="/adm/novo-usuario"]').click();
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche campos de cadastro
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('Teste Usuário2');
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type('teste_usuario2@exemplo.com');
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('senha123');
    //Clica no botão para criar usuário
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Usuário criado com sucesso!').should('be.visible');
  });

  it.skip('Teste 2: Deve falhar ao criar um usuário com email já cadastrado', () => {
    loginSite();
    cy.get('[href="/adm/novo-usuario"]').click();
    //Seleciona tipo de usuário
    cy.get('.sc-dsAqUS').select('Aluno');
    //Preenche dados com email já cadastrado
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type('Teste Usuário2');
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type('teste_usuario2@exemplo.com');
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type('senha123');
    //Tenta criar usuário novamente
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    //Verifica mensagem de erro
    cy.contains('Falha ao criar usuário.').should('be.visible');
  });

  it.skip('Teste 3: Fazer Login com um usuário já cadastrado e não entrar', () => {
    cy.visit('https://confianopai.com/login');
    //Escuta alerta nativo de falha no login
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Falha no login, verifique suas credenciais.');
    });
    //Preenche campos de login
    cy.get(':nth-child(2) > .sc-ktwOfi').type('Teste Usuário2');
    cy.get(':nth-child(3) > .sc-ktwOfi').type('senha123');
    //Clica no botão login
    cy.get('.sc-csKJxZ').click();
  });

  //Nesse teste o orientador não deveria ser considerado membro do projeto, mas o sistema não está validando isso corretamente
  it.skip('Teste 4: Adicionar novo membro em um projeto', () => {
    loginSite();
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para adicionar membro
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    //Preenche email do membro a adicionar
    cy.get('.sc-ppzwM').type('teste_usuario2@exemplo.com');
    //Seleciona cargo "Integrante 3"
    cy.get('.sc-ldgOGP').select('Integrante 3');
    //Confirma adição do membro
    cy.get('.sc-hiTDLB>path').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Projeto atualizado com sucesso!').should('be.visible');
  });

  it('Teste 5: Adicionar novo membro em um projeto com email repetido e passar', () => {
    loginSite();
    //Abre projeto
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para adicionar membro
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    //Preenche email repetido
    cy.get('.sc-ppzwM').type('teste_usuario2@exemplo.com');
    //Seleciona cargo "Integrante 4"
    cy.get('.sc-ldgOGP').select('Integrante 4');
    //Confirma adição
    cy.get('.sc-hiTDLB>path').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Verifica mensagem de sucesso
    cy.contains('Projeto atualizado com sucesso!').should('be.visible');
  });

  it.skip('Teste 6: Adicionar novo membro em um projeto com número do integrante repetido e falhar', () => {
    loginSite();
    //Abre projeto
    cy.get('[href="/adm/projetos/534"]').click();
    //Clica para adicionar membro
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    //Preenche email diferente
    cy.get('.sc-ppzwM').type('teste_usuario3@exemplo.com');
    //Seleciona cargo "Integrante 3" repetido
    cy.get('.sc-ldgOGP').select('Integrante 3');
    //Confirma adição
    cy.get('.sc-hiTDLB>path').click();
    //Salva projeto
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    //Verifica mensagem de erro inesperado
    cy.contains('An unexpected error occurred: 500 INTERNAL_SERVER_ERROR "Aluno não cadastrado:liviateste@exemplo.br,teste_usuario3@exemplo.com". Please contact Vitor Oliveira Juliano de Almeida');
  });
});

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