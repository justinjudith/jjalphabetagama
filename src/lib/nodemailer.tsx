import nodemailer from 'nodemailer';
import LogError from '@/utils/LogError';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_APP_PASSWORD,
  },
});

const sendMail = async (
  sender: string | undefined,
  receiver: string | undefined,
  subject: string,
  message: string,
  cb: (e?: any) => void
) => {
  const options = {
    from: sender,
    to: receiver,
    subject: subject,
    text: message,
  };
  transporter.sendMail(options, (error: any, info: any) => {
    if (error) {
      cb(error);
    } else {
      return cb();
    }
  });
};

export default sendMail;
