'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    images: DataTypes.STRING
  }, {});
  menus.associate = function(models) {
    menus.belongsTo(models.categories,{
      as : 'category_id',
      foreignKey : 'categoryId'
    })
  };
  return menus;
};