const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

class Rental extends Model {}

Rental.init({
    idRental: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCar: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    userPhone: {
        type: DataTypes.STRING(50),
        allowNull: true // Assuming phone number is optional
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    luggage: {
        type: DataTypes.INTEGER,
        allowNull: true // Assuming this field is optional
    },
    status: {
        type: DataTypes.ENUM('active', 'completed'),
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true // Assuming this field is optional
    }
}, {
    sequelize,
    modelName: 'Rental',
    timestamps: true, // Enable createdAt and updatedAt
    tableName: 'Rentals' // Set the table name
});

module.exports = Rental;
