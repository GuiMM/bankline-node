const { Model, DataTypes } = require("sequelize");
const ContaCorrenteSchema = require("../schemas/conta-corrente-schema.json")


class ContaCorrenteDbModel extends Model {

    static init(connection) {

        const schema = {
            id: {
                type: DataTypes.UUIDV4,
                primaryKey: true
            },
            saldo: DataTypes.DECIMAL,
            active: DataTypes.BOOLEAN
        }

        super.init(schema, { sequelize: connection, modelName: ContaCorrenteSchema.tableName })
    }

    static associate(models){
        this.belongsTo(models.pessoa, { foreignKey: 'conta_corrente_id', as:'conta-corrente' })
    }
}

module.exports = ContaCorrenteDbModel