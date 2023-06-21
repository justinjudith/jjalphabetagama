import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';
import Team from '@/database/Modals/Team';

interface IRequest extends NextApiRequest {
  body: any;
}

export default async function addTeamDataHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((error) =>
    res.status(500).json({ message: 'Connection Failed...' })
  );
  try {
    if (req.method === 'POST') {
      const TeamData = await Team.create({ memberName: 'Justin Judith' });
      if (TeamData) {
        res.status(200).json({ teamData: TeamData });
      } else res.status(404).json({ message: 'Team Data does not saved!' });
    } else res.status(404).json({ message: `Route not found` });
  } catch (error) {
    LogError('[AddTeamHandler API]', error);
    res.status(500).json({ message: 'Server error, try again later!' });
  }
}
