describe("fazendo login com adm já definido", () => {
  it("login de usuário", () => {
    loginSite();
  });
  //Teste 1
  it("Cadastro de orientador", () => {
    //Fazendo o login no site
    loginSite();
    cadastrarOrientador();
  });
  //Teste 2
  it("Verifcando se o orientador está sem cadastro", () => {
    // para verificar se o orientador está sem cadastro, crio dados sem estar cadastrados e tento adcionar a equipe de projeto, caso não esteja deve me renornar um popup de erro
    //Fazendo o login no site
    let infos_login = loginSite();
    //Criao dados aleatórios para o orientador que não existe
    let infos_aluno = criarDadosDeOrientador();
    //Clicando no botão de adicionar projeto
    cy.get(".sc-jdHILj > svg").click();
    //inserir manualmente
    cy.get('[href="/adm/add-projeto/cadastro"]').click();
    //navego até o campo de adicionar um orientador no projeto e adiciono o email sem cadastro
    cy.get(":nth-child(6) > :nth-child(2) > .sc-hsaIUA").type(infos_aluno[1]); //Colocando o email do orientador
    cy.get(".sc-hIPBNq").click(); //Clicando fora da box para observar o PoPup
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain.text",
      "Erro ao buscar o nome do membro. Verifique o email e tente novamente."
    );
  });
  //Teste 3
  it("Criando equipe de projeto com orientador cadastrado", () => {
    //para isso além de cadastrar o orientador devo cadastrar também o aluno
    let infos_orientador = cadastrarOrientador();
    let infos_aluno = cadastrarUsuario();
    let infos_projeto = criarProjeto();

    cy.get('[href="/adm/projetos"]').click();

    //Clicando no botão de adicionar projeto
    cy.get(".sc-jdHILj > svg").click();
    //inserir manualmente
    cy.get('[href="/adm/add-projeto/cadastro"]').click();

    cy.get(".sc-fYrVWQ > .sc-hsaIUA").type(infos_projeto[0]); //Colocando o nome do projeto
    cy.get(":nth-child(2) > :nth-child(2) > .sc-hsaIUA").type(infos_aluno[1]); //Colocando o email do aluno
    cy.get(":nth-child(6) > :nth-child(2) > .sc-hsaIUA").type(
      infos_orientador[1]
    ); //Colocando o email do orientador

    cy.get(":nth-child(1) > .sc-bZTyFN > .sc-hlqirL").select("Sem pendências"); //Selecionando o status do projeto
    cy.get(":nth-child(2) > .sc-bZTyFN > .sc-hlqirL").select(
      "Projeto Internacional"
    ); //selecionando a paralela

    cy.get(".sc-eGgGjL > :nth-child(1)").click();
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain.text",
      "Equipe criada com sucesso!"
    );
  });
  //Teste 4
  it("tentanto cadastrar apenas com o nome e senha(erro esperado)", () => {
    //Fazendo o login no site
    loginSite();

    //Criando um orientador com dados aleatórios
    let infos_orientador = criarDadosDeOrientador();


    //Clicando no botão de adicionar orientador
    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get(".sc-dsAqUS").select("Orientador");

    //Colocando os dados do orientador
    cy.get(":nth-child(1) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[0]); //Colocando o nome do orientador
    //cy.get(":nth-child(2) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[1]); //Colocando o email do orientador
    cy.get(":nth-child(3) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[2]); //Colocando a senha do orientador

    //Clicando no botão de cadastrar orientador
    cy.get(":nth-child(4) > .sc-irLvIq > .sc-csKJxZ").click();

    //Verificando se o orientador foi cadastrado com sucesso
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain.text",
      "Usuário criado com sucesso!"
    );
  });
  //Teste 5
  it("tentando cadastrar apenas com email e senha(erro esperado)", () => {
    //Fazendo o login no site
    loginSite();

    //Criando um orientador com dados aleatórios
    let infos_orientador = criarDadosDeOrientador();


    //Clicando no botão de adicionar orientador
    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get(".sc-dsAqUS").select("Orientador");

    //Colocando os dados do orientador
    //cy.get(":nth-child(1) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[0]); //Colocando o nome do orientador
    cy.get(":nth-child(2) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[1]); //Colocando o email do orientador
    cy.get(":nth-child(3) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[2]); //Colocando a senha do orientador

    //Clicando no botão de cadastrar orientador
    cy.get(":nth-child(4) > .sc-irLvIq > .sc-csKJxZ").click();

    //Verificando se o orientador foi cadastrado com sucesso
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain.text",
      "Usuário criado com sucesso!"
    );
  });
  //Teste 6
  it("tentando cadastrar apenas sem a senha(erro esperado)", () => {
    //Fazendo o login no site
    loginSite();

    //Criando um orientador com dados aleatórios
    let infos_orientador = criarDadosDeOrientador();


    //Clicando no botão de adicionar orientador
    cy.get('[href="/adm/novo-usuario"]').click();
    cy.get(".sc-dsAqUS").select("Orientador");

    //Colocando os dados do orientador
    cy.get(":nth-child(1) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[0]); //Colocando o nome do orientador
    cy.get(":nth-child(2) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[1]); //Colocando o email do orientador
    //cy.get(":nth-child(3) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[2]); //Colocando a senha do orientador

    //Clicando no botão de cadastrar orientador
    cy.get(":nth-child(4) > .sc-irLvIq > .sc-csKJxZ").click();

    //Verificando se o orientador foi cadastrado com sucesso
    cy.get(".Toastify__toast-body > :nth-child(2)").should(
      "contain.text",
      "Usuário criado com sucesso!"
    );
  });

});


function criarProjeto() {
  //Criando um projeto com dados aleatórios
  let nome_projeto =
    "Projeto " + new Date().getMinutes() + new Date().getSeconds();
  let infos_projeto = [nome_projeto];

  return infos_projeto;
}
function cadastrarUsuario() {
  //Criando um usuário com dados aleatórios
  let primeiro_nome = "aluno";

  let minuto = new Date().getMinutes();
  let segundo = new Date().getSeconds();

  let nome_completo = primeiro_nome + minuto + segundo;
  let email = primeiro_nome + minuto + segundo + "@gmail.com";
  let senha = primeiro_nome + minuto + segundo + "123";

  let infos_aluno = [nome_completo, email, senha];

  //Voltando para a página inicial
  cy.get('[href="/adm/projetos"]').click();
  //Clicando no botão de adicionar orientador
  cy.get('[href="/adm/novo-usuario"]').click();
  cy.get(".sc-dsAqUS").select("Aluno");

  //Colocando os dados do aluno
  cy.get(":nth-child(1) > .sc-bqOYya > .sc-gHjVMF").type(infos_aluno[0]); //Colocando o nome do aluno
  cy.get(":nth-child(2) > .sc-bqOYya > .sc-gHjVMF").type(infos_aluno[1]); //Colocando o email do aluno
  cy.get(":nth-child(3) > .sc-bqOYya > .sc-gHjVMF").type(infos_aluno[2]); //Colocando a senha do aluno

  cy.get(":nth-child(4) > .sc-irLvIq > .sc-csKJxZ").click();
  //Verificando se o aluno foi cadastrado com sucesso
  return infos_aluno;
}
function criarDadosDeOrientador() {
  let primeiro_nome = "orientador";

  let minuto = new Date().getMinutes();
  let segundo = new Date().getSeconds();

  let nome_completo = primeiro_nome + minuto + segundo;
  let email = primeiro_nome + minuto + segundo + "@gmail.com";
  let senha = primeiro_nome + minuto + segundo + "123";

  let infos_orientador = [nome_completo, email, senha];

  return infos_orientador;
}
function cadastrarOrientador() {
  //Criando um orientador com dados aleatórios
  let infos_orientador = criarDadosDeOrientador();

  //Fazendo o login no site
  loginSite();

  //Clicando no botão de adicionar orientador
  cy.get('[href="/adm/novo-usuario"]').click();
  cy.get(".sc-dsAqUS").select("Orientador");

  //Colocando os dados do orientador
  cy.get(":nth-child(1) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[0]); //Colocando o nome do orientador
  cy.get(":nth-child(2) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[1]); //Colocando o email do orientador
  cy.get(":nth-child(3) > .sc-bqOYya > .sc-gHjVMF").type(infos_orientador[2]); //Colocando a senha do orientador

  //Clicando no botão de cadastrar orientador
  cy.get(":nth-child(4) > .sc-irLvIq > .sc-csKJxZ").click();

  //Verificando se o orientador foi cadastrado com sucesso
  cy.get(".Toastify__toast-body > :nth-child(2)").should(
    "contain.text",
    "Usuário criado com sucesso!"
  );

  return infos_orientador;
}
function loginSite() {
  //Nome do usuário (fixo)
  let nome = "lara@";

  //Senha do usuário (fixa)
  let senha = "123";

  //Colocando em uma lista infos_login
  let infos_login = [nome, senha];

  //Fazendo o teste do Login
  cy.visit("https://confianopai.com/login");

  //Adicionando o nome de usuário e a senha
  cy.get(":nth-child(2) > .sc-ktwOfi").type(nome);
  cy.get(":nth-child(3) > .sc-ktwOfi").type(senha);

  //Clicando para no botão
  cy.get(".sc-csKJxZ").click();

  //Retornando a informação
  return infos_login;
}
