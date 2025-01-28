import mongoose from "mongoose";
import dotenv from "dotenv";

//load env config
dotenv.config();

const connectDB = async () => {
    try {
      const uri = 'mongodb+srv://mastersarveshgore:wl44GO95lKN5M5zw@cluster0.xvc04.mongodb.net/test?retryWrites=true&w=majority'; 
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
