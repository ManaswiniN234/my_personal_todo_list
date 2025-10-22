
import mongoose from "mongoose"; 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
       
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); //1 is the status code which indicates failure
    }
};

export default connectDB;