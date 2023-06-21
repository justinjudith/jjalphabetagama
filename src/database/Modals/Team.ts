import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const teamSchema = new Schema({
  category: {
    type: String,
    default: 'Planning',
  },
  memberName: {
    type: String,
  },
  about: {
    type: String,
    default:
      'DevOps, Really good in planning his technical as well as non-technical events',
  },
  faceBookURL: {
    type: String,
    default: '',
  },
  instagramURL: {
    type: String,
    default: '',
  },
  twitterURL: {
    type: String,
    default: '',
  },
});

const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export default Team;
