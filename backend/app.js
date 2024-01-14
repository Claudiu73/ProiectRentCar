const express = require('express');
const sequelize = require('./config/database');
const carRoutes = require('./routes/carRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const rentalRoutes = require('./routes/rentalRoutes'); 


const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

// Sync Sequelize models
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Car routes
app.use('/cars', carRoutes);
//rental routes
app.use('/rentals', rentalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
