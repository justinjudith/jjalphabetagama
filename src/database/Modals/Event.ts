import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const eventSchema = new Schema(
  {
    event: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
