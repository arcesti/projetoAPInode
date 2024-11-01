import UserModel from "../models/usersModel.js"

export default class UserController {
    async criar(req, res) {
        let { nome, email, idade } = req.body

        if(nome && email && idade) {
            let usuarioModel = new UserModel("", nome, email, idade)
            let usuarioCriar = await usuarioModel.criar()
            console.log(usuarioCriar)

            if(usuarioCriar) {
                res.status(201).json({
                    status: true,
                    data: {nome, email, idade}
                })
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "Usuario invalido"
                })
            }
        }
        else {
            res.status(400).json({
                status:false,
                message: "Usuario invalido 2"
            })
        }
    }

    async listar(req, res) {
        const usuarioModel = new UserModel('','','','')
        const users = await usuarioModel.listar();

        if(users) {
            res.status(200).json({
                status: true,
                data: users
            })
        }
        else {
            res.status(400).json({
                status: false,
                message: "User not found!"
            })
        }
    }

    async buscar(req, res) {
        const id = req.params.id
        if(id) {
            const user = await new UserModel(id, "", "", "").buscar()
            if(user) {
                res.status(200).json({
                    status:true,
                    data: user
                })
            }
            else {
                res.status(400).json({
                    status:false,
                    message:"User not found"
                })
            }
        }
        else {
            res.status(400).json({
                status:false,
                message:"Invalid request"
            })
        }
    }

    async delete(req, res) {
        const { id } = req.params
        if(id) {
            const deleted = await new UserModel(id, "", "", "").delete()
            if(deleted) {
                res.status(200).json({
                    status: true,
                    message: "User delete success"
                })
            }
            else {
                res.status(404).json({
                    status: false,
                    message: "User not found"
                })
            }
        }
        else {
            res.status(404).json({
                status: false,
                message: "Invalid request"
            })
        }
    }
}