//authentication api calls and logic
//user account (profile) api calls and logic
module.exports = function(sequelize, DataTypes) {
    var UserAccount = sequelize.define("UserAccount", {
      emailaddress: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [8]
      },
    });
    return UserAccount;
  };