import { NextApiRequest, NextApiResponse } from 'next';
import sendMail from '@/lib/nodemailer';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';

interface IRequest extends NextApiRequest {
  body: any;
}

export default async function contactHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((error) =>
    res.status(500).json({ message: 'Connection Failed...' })
  );
  try {
    if (req.method === 'POST' && req.body) {
      const { email, name, address, message } = req.body;
      sendMail(
        email,
        'ehsanellahiofficial@gmail.com',
        'User Contacted!',
        `Hello,my name is ${name}. I'm contacting from ${address} and I would like to say ${message}`,
        (error) => {
          if (!error) {
            res
              .status(200)
              .json({ message: 'We will respond to you shortly!' });
          } else {
            console.log(error);
            res.status(400).json({
              message: 'Error,Please Try Again...!',
            });
          }
        }
      );
    } else {
      res.status(404).json({ message: `Route not Found!` });
    }
  } catch (error) {
    LogError('[ContactUS]', error);
    res.status(500).json({ message: `Server Error,please try again later!` });
  }
}
