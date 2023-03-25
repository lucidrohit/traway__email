const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO__EMAIL,
    pass: process.env.ZOHO__PASSWORD,
  },
});

function sendEmail(templateContent, templatePath, mailOptions) {
  ejs.renderFile(
    path.join(__dirname, templatePath),
    templateContent,
    (err, html) => {
      if (err) {
        console.error("Error occurred:", err.message);
        return process.exit(1);
      }

      mailOptions.html = html;

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error occurred:", error.message);
          console.log(error);
          return process.exit(1);
        }
        console.log(` ${templateContent.email}: Email sent successfully!`);
        transporter.close();
      });
    }
  );
}

module.exports.sendEmail = sendEmail;
