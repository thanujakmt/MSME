/* eslint-disable no-console */
import * as nodemailer from 'nodemailer';

const mailTransporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: 'support@optigrit.com',
    pass: 'optigrit123'
  },
});


const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

export const sendMail = async (
  email: any,
  subject: any,
  html: any,
  retries = 3,
  delay = 2000
) => {
  const data = {
    from: 'support@optigrit.com',
    to: email,
    subject,
    html,
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mailTransporter.sendMail(data);
      return;
    } catch (err) {
      if (attempt === retries) {
        throw new Error(
          `Error occurred while sending mail after ${retries} attempts: ${JSON.stringify(err)}`
        );
      }
      console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }
};
