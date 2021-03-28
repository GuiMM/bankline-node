const { Model, DataTypes } = require("sequelize");
const UsuarioSchema = require('../schemas/usuario-schema.json')

class UsuarioDbModel extends Model {

    static init(sequelize) {

        super.init({

            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            active: DataTypes.BOOLEAN

        }, { sequelize, tableName: 'usuario' })
    }

    static associate(models) {
        this.belongsTo(models.PessoaDbModel, { foreignKey: 'pessoa_id', as: 'pessoa' })
    }
}

module.exports = UsuarioDbModel