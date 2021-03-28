const { uuid } = require("uuidv4")

class BaseModel {
    
    id
    active

    constructor(){

        this.id = uuid()
        this.active = true
    }
}

module.exports = BaseModel