import React from 'react';
import formatDay from '@/utils/Formats/formatDay';
import formatDate from '@/utils/Formats/formatDate';
import formatEvent from '@/utils/Formats/formatEvent';
import formatTime from '@/utils/Formats/formatTime';
interface Props {
  day: string;
  date: string;
  time: string;
  event: string;
}

const EventSummary = ({ day, date, time, event }: Props) => {
  const Day: string = formatDay(day);
  const Event: string = formatEvent(event);
  const Date: string = formatDate(date);
  return (
    <>
      <div className="border flex items-center justify-center text-2xl py-4 md:py-5 px-4 font-bold min-w-[300px]">
        <h1>Event Request Summary...</h1>
      </div>
      <div className="border py-4 md:py-5 px-4 font-bold">
        <h1>Organization:JJMilan Event Management</h1>
      </div>
      <div className="border py-4 md:py-5 px-4 ">
        <h1>Date and Time Available</h1>
        <p className="font-bold">
          First Available: {Day} : {Date} : {time}
          {formatTime(time)}
        </p>
      </div>
      <div className="border py-4 md:py-5 px-4 ">
        <h1>Date and Time Available</h1>
        <p className="font-bold">
          Second Available: {Day} : {Date} : {time}
          {formatTime(time)}
        </p>
      </div>
      <div className="border py-4 md:py-5 px-4 ">
        <h1>
          Event Type :<span className="font-bold">{Event}</span>
        </h1>
        <h1>Address</h1>
        <p className="font-bold">
          Holy Communion <br /> Venu Location: 4512 Guinea Road, Fairfax, VA
          22032
        </p>
      </div>
    </>
  );
};

export default EventSummary;
