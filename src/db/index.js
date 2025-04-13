import mongoose from'mongoose';
import { DB_NAME } from '../constants.js';
const connectDB=async () => {
    try{
       const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n  mongodb connected ! db host : ${connectioninstance.connection.host}`)
    } catch(error){
        console.log(`Error connecting to MongoDB:`, error)
        process.exit(1)
    }
}
export default connectDB
.then(()=>{
    app.listen(process.env.PORT || 8000, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch((err)=>{
    console.log(`mongo db connection failed:`, err)
})