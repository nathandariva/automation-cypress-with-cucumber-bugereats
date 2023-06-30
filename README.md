# Desafio Técnico - 02

## Pré Requisito
 - Ter Instalado o node.js na sua máquina
 - Pode realizar o download através do link: https://nodejs.org/en/download/

## Após ter instalado o nodejs

- 1º: clonar o projeto do github
- 2º: executar o comando "npm install" dentro da pasta clonada, para installar todas as dependências do projeto

## Variáveis de Ambiente - Caso tenha conteúdos sensiveis (não é o caso desse proejto)
 - Nesses testes temos conteúdos sensiveis, então a necessidade de criar as variaveis de ambiente
 - Na raiz do projeto, criar o arquivo com o nome: cypress.env.json;
 - Neste arquivo deve ser adicionadas o padrão de estrutura apresentada no arquivo "cypress.env.exemple.txt"

## Exemplo
    {
    "EMAIL": "Deve informar seu email aqui."
    "SENHA": "Informar a senha correta do respectivo email utilizado na plataforma."
    }
    
# Como executar os testes

## Modo Open - Modo Gráfico
    Para acompanhar a execução, no terminal execute o comando:
     - npx cypress open
   
    Após alguns segundos o modo open do cypress é exibido, e é só acionar em algum dos testes exibidos.
  
    
## Modo Headless - Execução e resultado direto no terminal
    Para rodar direto no terminal, execute o comando:
    - npx cypress run 