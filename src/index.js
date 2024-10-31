import express from 'express'

const app = express()
const PORT = 5000

app.use(express.json())

let users = [
    { id: 1, nome: "Joao", email: "joao@gmail.com", idade: 25 },
    { id: 2, nome: "Arcesti", email: "arcesti@gmail.com", idade: 25 }
]

app.get("/users", (req, res) => {
    res.status(200).json({ success: true, data: users })
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === Number(id))
    if (!user) {
        return res.status(400).json({ success: false, message: "Err: id not found" })
    }
    res.status(200).json(user)
})

app.post("/users", (req, res) => {
    const user = req.body
    console.log(user)
    if (!user) {
        return res.status(400).json({ success: false, message: "Erro ao criar usuario" })
    }
    users.push(user)
    res.status(201).json(user)
})

app.get("/", (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => console.log(`Escutando em: http://localhost:${PORT}`))
