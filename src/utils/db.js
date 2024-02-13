import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    console.log("db link : ", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
    });

    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to Database !!");
  }
};

export default connect;
