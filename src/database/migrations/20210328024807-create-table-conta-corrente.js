const ContaCorrenteSchema = require("../schemas/conta-corrente-schema.json")


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ContaCorrenteSchema.tableName,
      {
        id: {
          primaryKey: true,
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4
        },
        saldo:{
          type: Sequelize.DECIMAL,
          allowNull: false,
          defaultValue: 0
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        active:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(ContaCorrenteSchema.tableName);

  }
};
