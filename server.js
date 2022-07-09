const express = require("express")
const connectDB = require("./db")
const app = express()
const PORT = 5000
const ConnectDB = requrie('./db')

connectDB()

app.use(express.json())

const server = app.listen(PORT, ()=> console.log(`Server connected to port ${PORT}`))

process.on('unhandledRejection', err=> {
    console.log(`An error occured: ${err.message}`)
    server.close(() => process.exit(1))
})



