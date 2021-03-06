const OperacaoDbModel = require('../database/models/operacao-dbmodel')

class OperacaoRepository {

    async add(operacao){
        const dbmodel = new OperacaoDbModel(operacao)

        await dbmodel.save()
    }

    async getAll(){
        return await OperacaoDbModel.find({}).exec()
    }

    async getById (operacaoId) {
        return await OperacaoDbModel.findById(operacaoId).exec()
    }

    async getByAccountId(contaId){
        return await OperacaoDbModel.find().or([{ contaOrigemId: contaId }, { contaDestinoId: contaId }])
    }

}

module.exports = OperacaoRepository