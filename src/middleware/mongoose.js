import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MONGO_URI:", process.env.MONGO_URI);
  return handler(req, res);
};

export default connectDb;
