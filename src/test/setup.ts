import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global{
      signin(): Promise<string[]>
    }
  }
}

let mongo: any;

jest.setTimeout(30000);

beforeAll( async () => {
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});


beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});