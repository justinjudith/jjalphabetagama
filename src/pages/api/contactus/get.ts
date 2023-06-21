import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';
import ContactInfo from '@/database/Modals/ContactInfo';
interface IRequest extends NextApiRequest {
  body: any;
}

export default async function ownerDataHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((error) =>
    res.status(500).json({ message: 'Connection Failed...' })
  );
  try {
    if (req.method === 'GET') {
      const contactData = await ContactInfo.find({});
      if (contactData) {
        res.status(200).json({ contactData: contactData[0] });
      } else res.status(404).json({ message: 'No Contact Data found' });
    } else res.status(404).json({ message: `Route not found` });
  } catch (error) {
    LogError('[getContactDataHandler API]', error);
    res.status(500).json({ message: 'Server error, try again later!' });
  }
}
