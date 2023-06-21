import type { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import sendMail from '@/lib/nodemailer';
import LogError from '@/utils/LogError';
import User from '@/database/Modals/Users';
import md5 from 'md5';

interface IRequest extends NextApiRequest {
  body: any;
}

export default async function registerHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((error) =>
    res.status(500).json({ message: 'Connection Failed....' })
  );
  try {
    if (req.method === 'POST' && req.body) {
      const body = req.body;
      const newUser = {
        ...body,
        password: md5(body.password),
      };
      const RegisterUser = await User.create(newUser);
      console.log(RegisterUser);
      if (RegisterUser) {
        sendMail(
          process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
          newUser.email,
          'Welcome!',
          `Your password is ${body?.password}.Do not share it with anybody else!`,
          (error: any) => {
            if (!error) {
              res.status(201).json({
                message: 'Account created successfully, check your email',
                user: RegisterUser,
              });
            } else {
              LogError('[LogError]', error);
              res.status(201).json({
                message: 'Account created successfully, check your email',
                user: RegisterUser,
              });
            }
          }
        );
      }
    } else {
      res.status(404).json({ message: `Route not found!` });
    }
  } catch (error:any) {
    LogError('[RegisterUser]', error);
    res.status(500).json({ message: 'Server Error,please try again later!' });
  }
}
