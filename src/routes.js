const PessoaRoutes = require('#route/pessoa')
const ContaCorrenteRoutes = require('#route/conta-corrente')
const OperacaoRoutes = require('#route/operacao')

module.exports = [
    ...PessoaRoutes,
    ...ContaCorrenteRoutes,
    ...OperacaoRoutes
]