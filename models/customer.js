module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        emailaddress: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
             len: [10]
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [10]
        }
      },      
    });
    return Customer;
  };
  