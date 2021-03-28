const { Model, DataTypes } = require('sequelize')
const PessoaSchema = require('../schemas/pessoa-schema.json')

class PessoaDbModel extends Model{

    static init(sequelize){

        const schema = {
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            usuario_id: DataTypes.UUIDV4,
            conta_corrente_id: DataTypes.UUIDV4,
            active: DataTypes.BOOLEAN
        }

        super.init(schema, { sequelize, modelName: PessoaSchema.tableName})
    }

    static associate(models){
        this.hasOne(models.usuario, { foreignKey: 'usuario_id', as:'usuario' })
        this.hasOne(models['conta-corrente'], { foreignKey: 'conta_corrente_id', as:'contas-corrente' })
    }
}

module.exports = PessoaDbModel