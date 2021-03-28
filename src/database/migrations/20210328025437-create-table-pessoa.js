const PessoaSchema = require('../schemas/pessoa-schema.json')
const UsuarioSchema = require('../schemas/usuario-schema.json')
const ContaCorrenteSchema = require('../schemas/conta-corrente-schema.json')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(PessoaSchema.tableName,
      {
        id: {
          primaryKey: true,
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        usuario_id:{
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: UsuarioSchema.tableName,
            key: 'id'
          },
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        },
        conta_corrente_id:{
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: ContaCorrenteSchema.tableName,
            key: 'id'
          },
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
          onCreate:'CASCADE'
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
        }
      }
    )
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(PessoaSchema.tableName);
  }
};
