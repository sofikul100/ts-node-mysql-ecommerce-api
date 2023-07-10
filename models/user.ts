import mongoose,{Document , Schema} from "mongoose";
import validator from "validator";


interface Iuser extends Document {
     name:string;
     email:string;
     password:string;
     avatar:string;
     role:string;
     createdAt:Date;
     posts?:string[];
}




const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Enter you name..'],
        trime:true
    },
    email:{
        type:String,
        required:[true,'Enter your email'],
        validate:[validator.isEmail,'Enter currect email']
    },
    password:{
        type:String,
        required:[true,'Enter you password'],
        minLength:[8,'Password should be gather then 8 characters'],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    posts:[
        {
            user:{
                type:mongoose.Types.ObjectId,
                ref:"Post"
            }
        }
    ],
    role:{
        type:String,
        default:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const User = mongoose.model<Iuser>('User',userSchema);


export default User;