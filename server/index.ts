import express, { Request, Response } from 'express';
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;
const PASSWORD = process.env.PASSWORD;

const getSubject = (name: string, email: string) => {
  const dateArray = new Date()
    .toLocaleString('en-US', { timeZone: 'America/Chicago' })
    .toString()
    .split(' ');
  const date = dateArray[0].split(',')[0];
  const time = dateArray.splice(1, 2).join(' ');
  console.log(date);
  return `${name} <${email}>: ${date}, ${time}`;
};

app.options('/post', cors());
app.post('/post', async (req: Request, res: Response) => {
  const inputs = await req.body.userInputs;
  console.log(inputs);

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
  });

  const mailOptions = {
    from: `${inputs.nameInput} <${inputs.emailInput}>`,
    to: TO_EMAIL,
    subject: getSubject(inputs.nameInput, inputs.emailInput),
    text: inputs.message,
  };
  try {
    await transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.log(error);
        res.send('error:' + error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json(mailOptions);
        res.send('success');
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Connected to live server on PORT: ${PORT}!`);
});
