import mysql from "mysql";


export const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"typescript-node"

});



const connectWithMsql =  () => {
   connection.connect((err) =>{
       if(err){
          console.log("Error connecting to mysql",err)
       }
   
       console.log("Successfully mysql connect with application")
   })
}

export default connectWithMsql;