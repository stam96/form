const nodemailerSendgrid = require("nodemailer-sendgrid");
require("dotenv").config({ path: ".env" });
const nodemailer = require("nodemailer");
//const htmlIndex = require("../email/view");
/*const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.APIUSERMAIL,
      pass: process.env.APIUSERPASS,
    },
  });
  return transport;
};
*/
//SendGrid
const createTransport = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.APISEND,
    })
  );
  return transport;
};

//Send Mail
const sendMail = async (newUser) => {
  const transporter = createTransport();
  const info = await transporter.sendMail({
    from: "svalarezo62@gmail.com", // sender address
    to: [`${newUser.email}`, "svalarezo62@gmail.com"], // list of receivers
    subject: `${newUser.name}`, // Subject line
    text: "Bienvenido", // plain text body
    html: `
    Gracias por su sugerencias`,
  });
  console.log("Mensaje enviado");
  return;
};

exports.sendMail = (newUser) => sendMail(newUser);
