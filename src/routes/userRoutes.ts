import {Router} from "express";

import UserController from "../controllers/userController";
import MySqlDatabase from "../db/MySqlDtabase";

//============ creating a object for MySqlDatabase class===========//
const db = new MySqlDatabase();
//=========== creating a object for UserController class =========//
const userController = new UserController(db);
class UserRoutes {
    private router:Router;
    constructor(){
        this.router = Router();
        this.initializeRoutes();
    }


    private initializeRoutes () : void {
        this.router.get('/users',userController.getUsers)
    }

    public getRouter() : Router{
        return this.router;
    }
}


export default UserRoutes;