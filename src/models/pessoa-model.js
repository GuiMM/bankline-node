const BaseModel = require("./base-model.js")
const UsuarioModel = require("./usuario-model.js")
const ContaCorrenteModel = require("./conta-corrente-model.js")
const CpfUtil = require("../util/cpf-util.js")
const _ = require("lodash")
const Messages = require('../messages.js')
const Boom = require("@hapi/boom")


class PessoaModel extends BaseModel {

    nome
    cpf
    usuario
    contaCorrente

    constructor(nome, cpf, usuario = null, contaCorrente = null) {

        super()

        this.nome = nome
        this.cpf = cpf
        this.usuario = usuario
        this.contaCorrente = contaCorrente
        
        this.validate()
    }

    validate() {

        if (!this.nome?.trim())
            throw Boom.badRequest(Messages.Pessoa.NomeNulo)

        if (!this.cpf?.trim())
            throw Boom.badRequest(Messages.Pessoa.CPFNulo)

        if (!CpfUtil.isValid(this.cpf))
            throw Boom.badRequest(Messages.Pessoa.CPFInvalido)

        if (this.usuario && !(this.usuario instanceof UsuarioModel))
            throw Boom.badRequest(Messages.Pessoa.UsuarioTipoErrado)

        if (this.contaCorrente && !(this.contaCorrente instanceof ContaCorrenteModel))
            throw Boom.badRequest(Messages.Pessoa.ContaCorrenteTipoErrado)
    }

}

module.exports = PessoaModel