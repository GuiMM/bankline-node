const ContaCorrenteRepository = require("../repositories/conta-corrente-repository")
const BaseService = require("./base-service")

class ContaCorrenteService extends BaseService {

    constructor() {
        super('Conta-Corrente', new ContaCorrenteRepository())
    }
}

module.exports = ContaCorrenteService