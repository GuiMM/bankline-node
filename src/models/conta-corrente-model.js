const BaseModel = require("./base-model.js")

class ContaCorrenteModel extends BaseModel { 

    saldo

    constructor(saldo){
        super()
        this.saldo = saldo || 0
    }
    
}

module.exports = ContaCorrenteModel