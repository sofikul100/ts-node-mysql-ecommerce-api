import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/mongodbDatabase";
import mongodbuserRoutes from "./routes/mongodb/userRoute"
// import ErrorHandler from "./middlewares/ErrorHandler";
const app:express.Application = express();


app.use(express.json())
//===configure dotenv with application==========//
dotenv.config();


//========== connect database===========//
//----------- mongodb-------------//
ConnectDB();













//======use all routes=========//
app.use('/api/mongodb/v2',mongodbuserRoutes);

app.get('/',(request:express.Request , response:express.Response) =>{
      response.status(200).send(`<h1>Hello Root Application<h1>`);
})


//=========== error handling middleware===============//
// app.use(ErrorHandler.errorHandler)
// app.use(ErrorHandler.handleNotFound)




app.listen(process.env.PORT , () =>{
     console.log(`Server is running on http://${process.env.HOSTNAME}:${process.env.PORT}`)
})
