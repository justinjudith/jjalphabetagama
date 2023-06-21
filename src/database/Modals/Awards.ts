import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const awardSchema = new Schema({
  noOfEvent: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
});

const Awards = mongoose.models.Event || mongoose.model('Award', awardSchema);

export default Awards;
