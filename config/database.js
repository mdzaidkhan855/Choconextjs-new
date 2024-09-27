import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  console.log("## is Mongo connected###", connected);

  // Only field specified in schema will be saved
  mongoose.set("strictQuery", true);

  // If database is already connected, dont connect again
  if (connected) {
    console.log("MongoDB already connected ");
    return;
  }

  try {
    if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
    // const connectedEstablished = await mongoose.connect(
    //   process.env.MONGODB_URI,
    //   {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //       serverSelectionTimeoutMS: 300000, // 30 seconds
    //     }
    // );
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
