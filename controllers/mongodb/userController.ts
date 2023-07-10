import {Request,Response,NextFunction} from "express"
import User from "../../models/user"



class UserController {
    public async Register (req:Request, res:Response,next:NextFunction){
          try{
              const {name,email,password} = req.body;
              
              
              
          }catch(e){
            return res.status(400).json(e)
          }
    }
}




export default UserController;