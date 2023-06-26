import React from 'react';
import Radio from '@/Components/Shared/Buttons/Radio';
import EventJSON from '../../../../../../Constants/Event.json';
interface Props {
  selectedEvent: string;
  handleEventChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventModal: React.FC<Props> = ({
  selectedEvent,
  handleEventChange,
}) => {
  return (
    <>
      <div className="border py-4 md:py-8 px-4 font-bold">
        <h1>Organization:JJMilan Event Management</h1>
      </div>
      <div className="border grid gap-1 md:gap-2 lg:gap-4 p-4">
        {EventJSON.map(({ id, value, label }: any) => {
          return (
            <Radio
              key={id}
              label={label}
              name="event"
              value={value}
              checked={selectedEvent === value}
              onChange={handleEventChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default EventModal;
