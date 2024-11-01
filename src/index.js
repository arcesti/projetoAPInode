import express from 'express'
import userRouter from './routes/userRoute.js'

const app = express()
const PORT = 5000

app.use(express.json())
app.use("/users", userRouter)

app.listen(PORT, () => console.log(`Escutando em: http://localhost:${PORT}`))
