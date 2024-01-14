const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Car = sequelize.define('Car', {

  idCar:{
    type:DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true
  },
  // Model attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER
  },
  gearBox: {
    type:DataTypes.STRING,
    allowNull: false
  },
  status: {
    type:DataTypes.BOOLEAN,
  },
  year:{
    type:DataTypes.INTEGER,
    allowNull: false
  },
  description:
  { type:DataTypes.STRING,
    allowNull: false},
  imageUrl: {
    type: DataTypes.STRING
  }
}, {
  // Other model options
});

module.exports = Car;
