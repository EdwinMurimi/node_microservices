const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

const sendEmail = (name, token) => {
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: "Sending Email using Node.js",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    console.log(`Email sent: ${info.response}`);
  });
};

module.exports = sendEmail;
