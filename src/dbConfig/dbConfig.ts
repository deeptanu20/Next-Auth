import mongoose from "mongoose";

export async function connect(){

    try {
     
       mongoose.connect(process.env.MONGO_URL!);



       const connection= mongoose.connection;

      connection.on('connected',()=>{
     console.log("MongoDB is Connected");                 // event listening
      })

      connection.on('error',(err)=>{
        console.log("MongoDB Connetion Error" + err);
        process.exit();
      })

      



    } catch (error) {
        
        console.log("db connection Error");
        console.log(error);
    }
}



