import mongoose from "mongoose";
import colors from 'colors';
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Mongodb Database'.bgMagenta.white, conn.connection.host .bgMagenta.white);
    } catch (error) {
        console.log('Error in Mongodb'.bgRed.white, error)
    }
}

export default connectDB;