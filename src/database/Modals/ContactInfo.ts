import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const contactInfoSchema = new Schema({
  address: {
    type: String,
    default:"hno9,fairfaxva"
  },
  phoneNumber: {
    type: String,
    default:"+1 2344"
  },
  fax: {
    type: String,
    default:"+1 50435"
  },
  email: {
    type: String,
    default:"e@gamil.com"
  },
});

const ContactInfo =
  mongoose.models.ContactInfo ||
  mongoose.model('ContactInfo', contactInfoSchema);

export default ContactInfo;
