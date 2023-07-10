import express from "express";


const router = express.Router();


import UserController from "../../controllers/mongodb/userController"

const userController = new UserController();







router.route('/user/register').post(userController.Register.bind(userController));




export default router;