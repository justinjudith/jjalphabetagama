import mongoose from 'mongoose';
import LogError from '@/utils/LogError';

const URL: any =
  process.env.NEXT_PUBLIC_MODE === 'dev'
    ? process.env.NEXT_PUBLIC_DATABASE_URL_DEVELOPMENT
    : process.env.NEXT_PUBLIC_DATABASE_URL_PRODUCTION;

const connectToMongo = async () => {
  try {
    const { connection } = await mongoose.connect(URL);
    if (connection.readyState === 1) {
      LogError('MongoDb', ' connected Successfully');
      return Promise.resolve();
    } else if (connection.readyState === 2) {
      LogError('MongoDb', 'Connecting...');
    } else {
      LogError('MongoDb', 'Disconnected');
    }
  } catch (error: any) {
    LogError('[MongoDb]', error);
    return Promise.resolve(error);
  }
};

export default connectToMongo;
