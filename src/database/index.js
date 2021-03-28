const dotenv = require('dotenv')
const dbConfig = require('./config/database.json')
const ContaCorrenteDbModel = require('./models/conta-corrente-dbmodel')
const UsuarioDbModel = require('./models/usuario-dbmodel')
const PessoaDbModel = require('./models/pessoa-dbmodel')
const Sequelize = require('sequelize')


dotenv.config()

const conn = new Sequelize(dbConfig[process.env.NODE_ENV])

ContaCorrenteDbModel.init(conn)
UsuarioDbModel.init(conn)
PessoaDbModel.init(conn)

console.log(conn.models)

PessoaDbModel.associate(conn.models)
UsuarioDbModel.associate(conn.models)
ContaCorrenteDbModel.associate(conn.models)

module.exports = conn


