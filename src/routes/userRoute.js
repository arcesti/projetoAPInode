import express from "express"
import UserController from "../controllers/usersController.js"

const userRouter = express.Router()
const userCtrl = new UserController()

userRouter.post("/create", userCtrl.criar)
userRouter.get("/list", userCtrl.listar)
userRouter.get("/search/:id", userCtrl.buscar)
userRouter.delete("/delete/:id", userCtrl.delete)

export default userRouter