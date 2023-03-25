const fs = require("fs");
const emailService = require("./services/email");
const USER__DATA__ADDRESS = "./data/25th_march_gulmarg.json";
const TEST__USER__DATA__ADDRESS = "./data/sample.json";
const TEMPLATE__PATH = "./../templates/boardingpass.ejs";

const usersList = JSON.parse(fs.readFileSync(USER__DATA__ADDRESS));


usersList.forEach((user, index) => {
  const mailOptions = {
    from: "community@traway.live",
    to: user.email,
    subject:
      "Traway: Your boarding passes, Travel guide and best wishes from team traway 😊😊",
    attachments: [
      {
        filename: "gulmarg.pdf",
        path: "./templates/assets/gulmarg.pdf",
      },
    ],
  };

  setTimeout(async()=>{
    await emailService.sendEmail(user, TEMPLATE__PATH, mailOptions);
  },index*2000)
});
