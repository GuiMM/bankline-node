const BaseHandler = require("#handler/base")
const OperacaoService = require('#service/operacao')

class OperacaoHandler extends BaseHandler {

    constructor() {
        super("operacao", new OperacaoService())
    }
}
module.exports = new OperacaoHandler()