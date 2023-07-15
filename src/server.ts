import express, { Application } from "express";
import UserRoutes from "./routes/userRoutes";
//=======Creating a object for MySqlDatabase class===========//
//=========creating a object for UserRoutes class=============//
const userRoutes = new UserRoutes();
class Server {

    private app: Application;
    private port: string;

    constructor() {
        this.app = express(),
        this.port = process.env.PORT || "3000",
        this.initializeMiddlewares();
        this.listen();
    };


    private initializeMiddlewares(): void {
        this.app.use(express.json())
        this.app.use('/api/v1/',userRoutes.getRouter())
    };


    private listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is working port on http://localhost:${this.port}`)
        })
    };



}





export default Server;