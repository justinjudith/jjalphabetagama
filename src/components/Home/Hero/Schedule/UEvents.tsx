import React from 'react';
import formatDate from '@/utils/Formats/formatDate';
import formatEvent from '@/utils/Formats/formatEvent';
import formatDay from '@/utils/Formats/formatDay';
import formatTime from '@/utils/Formats/formatTime';
interface UEventProps {
  date: string;
  day: string;
  time: string;
  event: string;
}

const UEvents: React.FC<UEventProps> = ({ date, day, time, event }) => {
  const Date: string = formatDate(date);
  const Day: string = formatDay(day);
  const timePeriod: string = formatTime(time);
  const Event: string = formatEvent(event);
  return (
    <div>
      <h1 className="font-bold">
        {Event} on {Date}
        <span>-</span> at {time}
        {timePeriod} FairFax VA
      </h1>
    </div>
  );
};

export default UEvents;
