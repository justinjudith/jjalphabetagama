import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';
import OwnerSummary from '@/database/Modals/OwnerSummary';
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
    if (req.method === 'POST') {
      const body = req.body;
      const OwnerData = await OwnerSummary.create({ location: 'Pakistan' });
      if (OwnerData) {
        res.status(200).json({ ownerData: OwnerData });
      } else res.status(404).json({ message: 'Owner Data does not saved!' });
    } else res.status(404).json({ message: `Route not found` });
  } catch (error) {
    LogError('[getOwnerDataHandler API]', error);
    res.status(500).json({ message: 'Server error, try again later!' });
  }
}
