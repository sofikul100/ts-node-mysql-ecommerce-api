import { Request,Response,NextFunction } from "express"
import MySqlDatabase from "../db/MySqlDtabase";
class UserController {
    private db:MySqlDatabase;
    constructor(db:MySqlDatabase){
       this.db= db;
    }


    public getUsers = async(req:Request,res:Response,next:NextFunction) : Promise<void> =>{
       try{
          await this.db.connect()

          const users = await this.db.query('SELECT * FROM users');
          res.json(users)
          
       }catch(error:any){
           res.status(400).json(error)
       }finally{
          await this.db.close();
       }
    }
}



export default UserController;