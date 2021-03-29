<h1 align="center">  Projeto Bankline - API em Node.js </h1> 
<p align="center"> Projeto final do bootcamp da Gama Academy - Turma 7 </p>
<h4 align="center"> 
	
</h4>

## Time Undefined

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/felipeks"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/7027100?s=400&u=b5349a8eb59349dfdcf65177d343a8215b038ce3&v=4" width="100px;" alt=""/><br /><sub><b>Felipe Seabra de Andrade</b></sub></a><br /><a href="https://github.com/felipeks" title="Undefined">:octocat:</a></td>
    <td align="center"><a href="https://github.com/GuiMM"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/11179757?s=100&v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Macedo Moreira</b></sub></a><br /><a href="https://github.com/GuiMM" title="Undefined">:octocat:</a></td>
    <td align="center"><a href="https://github.com/milenynakahara"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60037260?s=460&u=15c07c3c4011e0a2159cf7092feb8aea4e47d997&v=4" width="100px;" alt=""/><br /><sub><b>Mileny Nakahara</b></sub></a><br /><a href="https://github.com/milenynakahara" title="Undefined">:octocat:</a></td>
 </tr>
</table>


- Felipe Seabra :
  - Nível intermediário: 
  - Responsável por:  regra de negócio (service),  modelagem do banco de dados (repository), utilitários (utils) e controller.
- Guilherme Macedo Moreira 
  - Nível intermediário:
  - Responsável por:  desenvolver o modelo (model), regra de negócio (service),  modelagem do banco de dados (repository) , exceções (exception) e controller.
- Mileny Nakahara :
  - Nível iniciante.
  - Área de atuação: parte do desenvolvimento do service,  configurações e suporte nas definições de regra de negócios. 

## Funcionalidades da API
### API de um Bankline com cadastro de usuário, contas e lançamentos.
### Usuário
- Cadastrar
- Alterar senha 

### Transações bancárias
- Pagamento
- Depósito
- Transferência
- Lista

## Estrutura do Projeto
- Separado dentro de um pasta 📂src, cada um com suas responsabilidades: 
- database:
  - config: configuração dos bancos
  - migrantions: para a criação de tabelas
  - Models: modelo do banco de dados  
  - index: para rodar o bando de dados
- factories: criar um objeto complexo 
- handlers: controle de acessos 
- model: modelagem da regra de negocio
- Repository: a interface do banco de dados
- routes: definição da rota da aplicação
- security: segurança de acesso
- Service: regras de negócios
- util: regra reutilizada durante a aplicação
- mensagens.js: respositorio de mensagens de retornos
- routes.js: execulta as definições de rotas
- server.js: execulta o Swagger e JWT
- test: testes 
- docker-composer: virtulização dos brancos de dados 
- package.json: dependecias usadas na aplicação

```
📂src/
 ┗ 📂database
 ┃ ┗ 📂config
 ┃ ┃ ┣ 📜 mongo.json
 ┃ ┃ ┗ 📜 postgres.json
 ┃ ┣ 📂migrantions
 ┃ ┃ ┣ 📜 *****-create-pessoa.js
 ┃ ┃ ┣ 📜 *****-create-conta-corrente.js
 ┃ ┃ ┗ 📜 *****-create-usuario.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜 conta-corrente-dbmodel.js
 ┃ ┃ ┣ 📜 operacao-dbmodel.js
 ┃ ┃ ┣ 📜 pessoa-dbmodel.js
 ┃ ┃ ┗ 📜 usuario-dbmodel.js 
 ┃ ┣ 📜 index.js
 ┗ 📂factories
 ┃ ┗ 📜pessoa-factory.js
 ┗ 📂handlers
 ┃ ┣ 📜base-handler.js 
 ┃ ┣ 📜conta-corrente-handler.js 
 ┃ ┣ 📜operacao-handler.js 
 ┃ ┗ 📜pessoa-handler.js 
 ┗ 📂models
 ┃ ┣ 📜base-model
 ┃ ┣ 📜conta-corrente-model.js
 ┃ ┣ 📜operacao-model.js
 ┃ ┣ 📜pessoa-model.js
 ┃ ┣ 📜tipo-operacao-model.js
 ┃ ┗ 📜usuario-model.js
 ┗ 📂repositories
 ┃ ┣ 📜base-repository.js
 ┃ ┣ 📜conta-corrente-repository.js
 ┃ ┣ 📜conta-corrente-repository.js
 ┃ ┣ 📜pessoa-repository.js
 ┃ ┗ 📜usuario-repository.js
 ┗ 📂routes
 ┃ ┣ 📜conta-corrente-routes.js
 ┃ ┣ 📜operacao-routes.js
 ┃ ┗ 📜pessoa-routes.js
 ┗ 📂secutiry
 ┃ ┣ 📜auth-handler.js
 ┃ ┣ 📜auth-routes.js
 ┃ ┗ 📜jwt-strategy.js
 ┗ 📂services
 ┃ ┣ 📜base-service.js
 ┃ ┣ 📜conta-corrente-service.js
 ┃ ┣ 📜operacao-service.js
 ┃ ┣ 📜pessoa-service.js
 ┃ ┗ 📜usuario-service.js
 ┗ 📂util
 ┃ ┗ 📜cpf-util.js
 ┣ 📜messages.js
 ┣ 📜routes.js
 ┣ 📜server.js
 ┗ 📂test
 ┃ ┣ 📜cpf-test.js
 ┃ ┣ 📜operacao-test.js
 ┃ ┣ 📜pessoa-test.js
 ┃ ┗ 📜usuario-test.js 
 ┣ 🐳docker-composer.yaml
 ┣ 📜index.js
 ┗ {} package-json
 ```


## Documentação - Swagger
<h4 align="center"> 
	🚧  imagens 🚀 Pendente...  🚧
</h4>

## Dashboard
- Histórico de lançamento
  - detalhes da conta: débito, crédito, transferência entre usuários
  - Faz pesquisa de data de início e data final
- Saldo da conta
<h4 align="center"> 
	🚧  imagens 🚀 Pendente...  🚧
</h4>
 
## Usuário
- Prés- requisitos de validação solicitada pelo cliente: 
  - Nome, cpf, login e senha: não podem ser nulos.
  - Login: limite de 20 caracteres e login duplicado não permitido.
  - CPF: limite de 11 caracteres e CPF duplicado não permitido.
  - Cadastro de novo usuário: cadastro de conta corrente e 3 planos de conta (as categorias “C” significa crédito, “D” de débito, “TU” de transferências entre usuários). 

- O model tem os atributos com métodos de Getter e Setter:
  - Id
  - Nome 
  - CPF
  - Login
  - Senha
  <h4 align="center"> 
	🚧  imagens 🚀 Pendente...  🚧
</h4>

## Conta
- O model tem os atributos com o getters, setters e construtor:
  - Id - chave primária
  - Login 
  - Tipo (TipoConta Enum)
  - Saldo - sempre criado com saldo 0
  - Id Usuário
  <h4 align="center"> 
	🚧  imagens 🚀 Pendente...  🚧
</h4>

## Lançamento
- O model tem os atributos com o Getters e Setters:
  - Id
  - Data
  - Valor
  - Descrição
  - Plano Conta
  - Conta
  - Conta de destino 

<h4 align="center"> 
	🚧  imagens 🚀 Pendente...  🚧
</h4>
 

## Plano Conta (Categoria)
- O model tem os atributos com o getter, setters e construtor:
  - Id
  - nome - são as descrições do TipoMovimentoEnum
  - usuário
  - padrão - verifica se são TipoMovimentoEnum (bolean) que não podem ser alteradas. 
  - tipo movimento são TipoMovimentoEnum
  
  <h4 align="center"> 
	🚧  imagens 🚀 Pendente...  🚧
</h4>
       
 ### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)
<h4 align="center"> 
	🚧  faltando? 🚀 completar...  🚧
</h4>


## Referências:
- Layout do README - Link de outra turma de java, compartilhada em aula pelo professor Gleyson: 
  - https://github.com/Team-Multiplayer/account-api/blob/master/README.md
- Layout do README 
  - https://blog.rocketseat.com.br/como-fazer-um-bom-readme/#-logo-ou-banner

