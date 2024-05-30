import express from "express"
import dataFake from "../data/products.js"

const app = express()

app.use('/products' , (req , res )=> {
    res.send(dataFake)
})

export default app