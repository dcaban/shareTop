//equipment api calls and logic
module.exports = function(sequelize, DataTypes) {
    var Equipment = sequelize.define("Equipment", {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      speed: { //Bay please add GB to frontend!
        type: DataTypes.DECIMAL,
        allowNull: false,
        len: [1]
      },
      ram: { //Bay please add GB to frontend!
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      screen_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        len: [3]
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      routeName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
    });
    return Equipment;
  };
  