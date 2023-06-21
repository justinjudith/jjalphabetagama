import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';
import ContactInfo from '@/database/Modals/ContactInfo';

interface IRequest extends NextApiRequest {
  body: any;
}

export default async function addAddressDataHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((error) =>
    res.status(500).json({ message: 'Connection Failed...' })
  );
  try {
    if (req.method === 'POST') {
      const AddressData = await ContactInfo.create({
        memberName: 'Justin Judith',
      });
      if (AddressData) {
        res.status(200).json({ addressData: AddressData });
      } else res.status(404).json({ message: 'Contact Data does not saved!' });
    } else res.status(404).json({ message: `Route not found` });
  } catch (error) {
    LogError('[AddressInfoHandler API]', error);
    res.status(500).json({ message: 'Server error, try again later!' });
  }
}
