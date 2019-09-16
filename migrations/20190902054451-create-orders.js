'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuID: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references:{
          model : 'menus',
          key : 'id'
        },
        onUpdate : 'cascade',
        onDelete : 'cascade'
      },
      transactionID: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references:{
          model : 'transactions',
          key : 'id'
        },
        onUpdate : 'cascade',
        onDelete : 'cascade'
      },
      qty: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.TINYINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};