const transporter = require('./mailerConfig.js');  // Adjust the path as needed

const sendEmail = async (options) => {
  try {
    let info = await transporter.sendMail(options);
    console.log("Email sent: %s", info.messageId);
    // Additional success handling as needed
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;  // or handle the error as needed
  }
};

module.exports = sendEmail;
