import { NextApiRequest, NextApiResponse } from 'next';
import connectToMongo from '@/database/conn';
import LogError from '@/utils/LogError';
import Event from '@/database/Modals/Event';
import sendMail from '@/lib/nodemailer';
import OwnerSummary from '@/database/Modals/OwnerSummary';
interface IRequest extends NextApiRequest {
  body: any;
}

export default async function scheduleHandler(
  req: IRequest,
  res: NextApiResponse
) {
  connectToMongo().catch((err) =>
    res.status(500).json({ message: 'Connection Failed...' })
  );
  try {
    if (req.method === 'POST' && req.body) {
      const { event, date, day, time } = req.body;
      console.log('[SCHEDULE POST REQ]', req.body);
      const body = req.body;
      const ScheduleEvent = await Event.create(body);
      const totalEvents = await Event.find({});
      if (totalEvents) {
        const count: number = totalEvents.length;
        const updateEventsInOwnerSummary = await OwnerSummary.findOneAndUpdate(
          { _id: '64884b55214ac0bbb9e2338b' },
          { totalEvents: count }
        );
      }
      if (ScheduleEvent) {
        sendMail(
          'ehsanellahi051@gmail.com',
          'ehsanellahiofficial@gmail.com',
          'Event Scheduled!',
          `Hello, Your Event : ${event} has been scheduled at FairFex VA at ${time} ${date} ${day}!`,
          (error: any) => {
            if (!error) {
            } else {
              console.log(error);
              res.status(400).json({
                message: 'Error,Please Try Again...!',
              });
            }
          }
        );
        res.status(200).json({ message: 'Event Scheduled Successfully..!' });
      } else {
        res.status(404).json({ message: `Event doesn't saved,try again...!` });
      }
    } else {
      res.status(404).json({ message: `Route not Found!` });
    }
  } catch (error: any) {
    console.log(error);
    LogError('[Schedule Event]', error);
    res.status(500).json({ message: `Server Error,please try again later!` });
  }
}
