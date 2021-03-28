const { uuid } = require("uuidv4")

class BaseModel {
    
    id
    createdAt
    updatedAt
    active

    constructor(){

        this.id = uuid()

        const now = Date.now()

        this.createdAt = now
        this.updatedAt = now

        this.active = true
    }
}

module.exports = BaseModel