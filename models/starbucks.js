//equipment api calls and logic
module.exports = function(sequelize, DataTypes) {
    var starbucks = sequelize.define("starbucks", {
      Brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Store_Number: { //Bay please add GB to frontend!
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      Ownership_Type: { //Bay please add GB to frontend!
        type: DataTypes.STRING,
        allowNull: false
      },
      Street_Address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false
      },
      State: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Postcode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Phone_Number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Timezone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Longitude: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Latitude: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
    },{
      timestamps: false
    });
    return starbucks;
  };
  