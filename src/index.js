import express from "express"
import cors from "cors"

import apiProducts from "./routes/products.js"
import dataFake from "./data/products.js"


const PORT = 5000 
const app = express()

app.use(cors())
app.get('/' , (req , res ) => {
    res.send('server is ready')
})
app.use(apiProducts)

app.listen(PORT , () => {
    console.log(`Server is running on Port ${PORT}`)
})