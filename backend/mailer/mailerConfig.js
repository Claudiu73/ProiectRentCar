const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',  // Example with Mailtrap, replace with your SMTP details
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USERNAME,  // Use environment variables for security
    pass: process.env.MAILTRAP_PASSWORD
  }
});

module.exports = transporter;
