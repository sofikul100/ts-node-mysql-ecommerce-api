import mongoose from "mongoose"

const ConnectDB = async () => {
    try {

        const mongodb_url = process.env.MONGODB_URL;

        if(!mongodb_url){
            throw new Error('MongoDB connection URL not found in environment variables');
        }

       await mongoose.connect(mongodb_url);
       console.log('Mongodb connected successfully')
    } catch (e) {
        console.error('MongoDB connection error:', e);
        process.exit(1);
    }
}

export default ConnectDB;