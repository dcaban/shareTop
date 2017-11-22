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
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      ram: {
        type: DataTypes.STRING,
        defaultValue: "4GB"
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
    });
    return Equipment;
  };
  