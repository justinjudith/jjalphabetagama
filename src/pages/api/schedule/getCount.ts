import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';
import Event from '@/database/Modals/Event';
interface IRequest extends NextApiRequest {
  body: any;
}

export default async function eventHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((error) =>
    res.status(500).json({ message: 'Connection Failed...' })
  );
  try {
    if (req.method === 'GET') {
      const Events = await Event.find({});
      if (Events) {
        res.status(200).json({ count: Events.length });
      } else res.status(404).json({ message: 'No Event found' });
    } else res.status(404).json({ message: `Route not found` });
  } catch (error) {
    LogError('[EventHandler API]', error);
    res.status(500).json({ message: 'Server error, try again later!' });
  }
}
