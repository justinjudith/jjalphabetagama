import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const contactInfoSchema = new Schema({
  dateOfBirth: {
    type: String,
    default: 'June 24,2000',
  },
  age: {
    type: Number,
    default: 20,
  },
  gender: {
    type: String,
    default: 'Female',
  },
  location: {
    type: String,
  },
  yearOfExperience: {
    type: Number,
    default: 4,
  },
  totalEvents: {
    type: Number,
    default: 3,
  },
  availableLocation: {
    type: String,
    default: 'Dmv Area',
  },
  rateLevel: {
    type: String,
    default: 'Flexible',
  },
  averageEventPrice: {
    type: String,
    default: 'TBD',
  },
  currentLocation: {
    type: String,
    default: 'USA',
  },
  img: {
    type: String,
    default:
      'https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/',
  },
});

const OwnerSummary =
  mongoose.models.OwnerSummary ||
  mongoose.model('OwnerSummary', contactInfoSchema);

export default OwnerSummary;
