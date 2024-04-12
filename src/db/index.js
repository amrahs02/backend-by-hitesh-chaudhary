import mongoose, { connect } from "mongoose";
import { DB_NAME } from '../constants.js';


const connectDB = async () =>{
    try{
        // we can also keep mongoose.connect in a variable , here we keep it in conn...inst...
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstance.connection.host}`)
        console.log("MONGODB CONNECTED");

    }
    catch(err){
        console.log("CONNECTION FAILED", err);
        // 
        process.exit(1)
    }
}

export default connectDB;