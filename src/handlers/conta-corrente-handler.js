const ContaCorrenteService = require('#service/conta-corrente')
const BaseHandler = require('./base-handler.js')

class ContaCorrenteHandler extends BaseHandler {

    constructor() {
        super("conta-corrente", new ContaCorrenteService())
    }
}

module.exports = new ContaCorrenteHandler()