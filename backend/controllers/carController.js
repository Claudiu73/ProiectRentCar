const Car = require('../models/Car');

const carController = {
  // Fetch all cars
  async getAllCars(req, res) {
    try {
      const cars = await Car.findAll({
        where: {
          status: 1  // Only fetch cars where status is true
        }
      });
      res.json(cars);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Fetch a single car by ID
  async getCarById(req, res) {
    try {
      const car = await Car.findByPk(req.params.id);
      if (car) {
        res.json(car);
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  // Create a new car
  async createCar(req, res) {
    try {
      const newCar = await Car.create(req.body);
      res.status(201).json(newCar);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  // Update a car
  async updateCar(req, res) {
    try {
      const updated = await Car.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedCar = await Car.findByPk(req.params.id);
        res.status(200).json(updatedCar);
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  // Delete a car
  async deleteCar(req, res) {
    try {
      const deleted = await Car.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).send('Car deleted');
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = carController;
