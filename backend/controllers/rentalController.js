const Rental = require('../models/Rental');
const Car = require('../models/Car');
const sequelize = require('../config/database.js');
const sendEmail = require('../mailer/sendEmail.js');


const rentalController = {
    // Fetch all rentals
    async getAllRentals(req, res) {
        try {
            const rentals = await Rental.findAll();
            res.json(rentals);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Fetch a single rental by ID
    async getRentalById(req, res) {
        try {
            const rental = await Rental.findByPk(req.params.id);
            if (rental) {
                res.json(rental);
            } else {
                res.status(404).send('Rental not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Create a new rental
    async createRental(req, res) {
        const transaction = await sequelize.transaction();  // Start a new transaction
    
        try {
          const { idCar, startDate, endDate, userEmail, ...otherRentalData } = req.body;
    
          // Calculate the number of days
          const start = new Date(startDate);
          const end = new Date(endDate);
          const diffTime = Math.abs(end - start);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
          // Retrieve the car's price per day
          const car = await Car.findByPk(idCar);
          if (!car) {
            return res.status(404).send('Car not found');
          }
    
          const pricePerDay = car.price; // Assuming `price` field exists in Car model
    
          // Calculate total cost
          const totalCost = diffDays * pricePerDay;
    
          // Create the rental
          const newRental = await Rental.create({ 
            idCar, 
            startDate, 
            endDate, 
            totalCost, 
            userEmail,
            ...otherRentalData 
          }, { transaction });
    
          // Update the car's status to false
          await Car.update({ status: false }, {
            where: { idCar: idCar },
            transaction
          });

          const userMessage = `Thank you for your rental. Total cost: ${totalCost}. Details: ...`;
          const ownerMessage = `Your car has been rented. Total earnings: ${totalCost}. Details: ...`;
          
          await sendEmail({
            from: '"Rental Service" <noreply@rentalservice.com>',
            to: userEmail,
            subject: 'Rental Confirmation',
            text: userMessage
          });
    
          await sendEmail({
            from: '"Rental Service" <noreply@rentalservice.com>',
            to: "ceva@gmail.com",
            subject: 'Your Car Has Been Rented',
            text: ownerMessage
          });
    
          await transaction.commit(); // Commit the transaction
          res.status(201).json(newRental);
        } catch (error) {
          await transaction.rollback(); // Rollback the transaction in case of an error
          res.status(400).send(error.message);
        }
      },

    // Update a rental
    async updateRental(req, res) {
        try {
            const updated = await Rental.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedRental = await Rental.findByPk(req.params.id);
                res.status(200).json(updatedRental);
            } else {
                res.status(404).send('Rental not found');
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    // Delete a rental
    async deleteRental(req, res) {
        try {
            const deleted = await Rental.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.status(204).send('Rental deleted');
            } else {
                res.status(404).send('Rental not found');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = rentalController;
