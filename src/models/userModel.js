
import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({

    username:{
         type:String,
         required:[true,"please provide a username"],
         unique:true
    },

    email:{

        type:String,
        required:[true,"please provide an Email"],
        unique:true

    },
          
    password:{

        type:String,
        required:[true,"please provide a password "],
    },

   isVerified:{

        type:Boolean,
        default:false
    },


    isAdmin:{

        type:Boolean,
        default:false
    },

    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
    
   

})

const User= mongoose.models.users || mongoose.model("users",userSchema);                    // nextjs use edge computing 

export default User;