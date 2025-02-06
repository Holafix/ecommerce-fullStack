import mongoose from "mongoose"

const connectDB = async (params) => {

    mongoose.connection.on('connected', ()=>{
        console.log("DB Connected");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)
    
}

export default connectDB;