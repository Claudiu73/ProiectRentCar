const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Get all cars
router.get('/', carController.getAllCars);

// Get a single car by id
router.get('/:id', carController.getCarById);

// Create a new car
router.post('/', carController.createCar);


// Delete a car
router.delete('/:id', carController.deleteCar);

module.exports = router;
