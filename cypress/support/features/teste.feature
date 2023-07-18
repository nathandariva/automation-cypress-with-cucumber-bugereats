Feature: Login
  Como um usuário
  Eu quero fazer login na minha conta
  Para acessar recursos protegidos

Scenario: Login com credenciais válidas
  Given que estou na página de login
  When eu preencher o campo "username" com "meuusuario"
  And eu preencher o campo "password" com "minhasenha"
  And eu clicar no botão "Login"
  Then devo ser redirecionado para a página inicial
  And devo ver a mensagem de boas-vindas "Olá, usuário!"