const UsuarioSchema = require('../schemas/usuario-schema.json')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(UsuarioSchema.tableName,
      {
        id: {
          primaryKey: true,
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4
        },
        login:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        senha:{
          type: Sequelize.STRING,
          allowNull: false,
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
    await queryInterface.dropTable(UsuarioSchema.tableName);
  }
};
