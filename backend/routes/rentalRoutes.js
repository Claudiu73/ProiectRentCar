const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentalController'); // Adjust the path as necessary

// Get all rentals
router.get('/', rentalController.getAllRentals);

// Get a single rental by ID
router.get('/:id', rentalController.getRentalById);

// Create a new rental
router.post('/', rentalController.createRental);

// Update a rental
router.put('/:id', rentalController.updateRental);

// Delete a rental
router.delete('/:id', rentalController.deleteRental);

module.exports = router;
