import React, { useState } from 'react';
import SummaryModel from './Modals/EventSum/SummaryModel';
import EventModel from './Modals/EventSchedule/EventModel';
import DateTimeModel from './Modals/DateTime/DateTimeModel';
import FetchSummary from '@/utils/FetchEvents';
import {
  ToastSuccess,
  ToastWarning,
  ToastError,
} from '@/Components/Shared/Notification';
import LogError from '@/utils/LogError';
import BASEURL from '@/utils/BASEURL';
interface BookingProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}
interface BookingInputs {
  date: string;
  time: string;
  day: string;
  event: string;
}

const Booking: React.FC<BookingProps> = ({ open, setOpen }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [models, setModels] = useState({
    isEventModel: false,
    isDateTimeModel: false,
    isSummaryModel: false,
  });
  const [inputs, setInputs] = useState<BookingInputs>({
    date: '',
    time: '',
    day: '',
    event: '',
  });
  console.log(inputs.date, inputs.day);
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'date') {
      // Perform logic for date input
      const selectedDate = value;

      // Perform the logic to determine the corresponding day based on the selected date
      const dateObj = new Date(selectedDate);
      const dayOfWeek = dateObj.getDay();

      // Map the dayOfWeek to the corresponding radio button value
      let correspondingDay = '';
      switch (dayOfWeek) {
        case 0:
          correspondingDay = 'sunday';
          break;
        case 1:
          correspondingDay = 'monday';
          break;
        case 2:
          correspondingDay = 'tuesday';
          break;
        case 3:
          correspondingDay = 'wednesday';
          break;
        case 4:
          correspondingDay = 'thursday';
          break;
        case 5:
          correspondingDay = 'friday';
          break;
        case 6:
          correspondingDay = 'saturday';
          break;
        default:
          correspondingDay = '';
          break;
      }

      setInputs({ ...inputs, [name]: value, day: correspondingDay });
    } else {
      // Handle other inputs
      setInputs({ ...inputs, [name]: value });
    }
  };

  const handleEventClosed = () => {
    setOpen(false);
  };
  const handleEventNext = () => {
    if (!inputs.event) {
      ToastWarning('Please Select Event!');
      return;
    }
    setModels((prevVal) => ({
      ...prevVal,
      isEventModel: false,
      isDateTimeModel: true,
    }));
    setOpen(false);
  };
  const handleDateTimeClose = () => {
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: false,
    }));
    setOpen(true);
  };
  const handleDateTimeNext = () => {
    if (!inputs.day) {
      ToastWarning('Please Select Day!');
      return;
    }
    if (!inputs.date) {
      ToastWarning('Please Select Date!');
      return;
    }
    if (!inputs.time) {
      ToastWarning('Please Select Time!');
      return;
    }
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: false,
      isSummaryModel: true,
    }));
  };
  const handleSummaryClose = () => {
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: true,
      isSummaryModel: false,
    }));
  };
  const handleSummaryNext = async () => {
    setLoading(true);
    const body: BookingInputs = { ...inputs };
    try {
      const response = await fetch(`${BASEURL}api/schedule/add`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      });
      let jsonData = await response.json();
      setLoading(false);
      if (response.status === 200) {
        setInputs({ day: '', date: '', time: '', event: '' });
        setModels((prevVal) => ({
          ...prevVal,
          isSummaryModel: false,
        }));
        ToastSuccess(jsonData.message);
      }
      if (response.status === 400) {
        ToastError(jsonData.message);
      }
      if (response.status === 500) {
        ToastError(jsonData.message);
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      LogError('[EVENTSCHEDULE]', error);
      ToastError('Unable to Schedule Event Now, try again later!');
    }
  };
  const handleDirectSummaryClose = () => {
    setModels((prevVal) => ({
      ...prevVal,
      isDateTimeModel: false,
      isSummaryModel: false,
    }));
  };
  return (
    <>
      <EventModel
        open={open}
        handleClose={handleEventClosed}
        handleNext={handleEventNext}
        event={inputs.event}
        setEvent={handleInputs}
      />
      <DateTimeModel
        open={models.isDateTimeModel}
        handleClose={handleDateTimeClose}
        handleNext={handleDateTimeNext}
        date={inputs.date}
        day={inputs.day}
        time={inputs.time}
        event={inputs.event}
        handleInputs={handleInputs}
      />
      <SummaryModel
        open={models.isSummaryModel}
        handleClose={handleSummaryClose}
        handleNext={handleSummaryNext}
        handleDirectClose={handleDirectSummaryClose}
        date={inputs.date}
        day={inputs.day}
        event={inputs.event}
        time={inputs.time}
        loading={loading}
      />
    </>
  );
};

export default Booking;
