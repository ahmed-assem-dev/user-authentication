import { MongoClient } from "mongodb";
// import mongoose from "mongoose";

let client;
let dbUrl =
  "mongodb+srv://MyBlog-Ahmed:CGejyOleemZJ25V2@myblogdb.sbuoepi.mongodb.net/?retryWrites=true&w=majority";

export const initializeDbConnection = async () => {
  client = await MongoClient.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
