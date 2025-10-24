module.exports = (sequelize, Sequelize) => {
  const Items = sequelize.define(
    "Items",
    {
      itemUrl: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      itemName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      buyPrice: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );

  return Items;
};
