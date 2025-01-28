import mongoose from "mongoose";
import dotenv from "dotenv";

//load env config
dotenv.config();

const connectDB = async () => {
    try {
      const uri = process.env.MONGODB_URI; 
      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      //console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

export default connectDB;
