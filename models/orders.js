'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    menuID: DataTypes.INTEGER,
    transactionID: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.TINYINT
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.menus,{
      as : 'menu_id',
      foreignKey : 'menuID'
    }),
    orders.belongsTo(models.transactions,{
      as : 'transaction_id',
      foreignKey : 'transactionID'
    })
  };
  return orders;
};