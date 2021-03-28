const { Model, DataTypes } = require("sequelize");
const UsuarioSchema = require('../schemas/usuario-schema.json')

class UsuarioDbModel extends Model{

    static init(sequelize){

        const schema = {
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            active: DataTypes.BOOLEAN
        }

        super.init(schema, { sequelize, modelName: UsuarioSchema.tableName })
    }

    static associate(models){
        this.belongsTo(models.pessoa, { foreignKey: 'usuario_id', as:'pessoa' })
    }
}

module.exports = UsuarioDbModel