import express from "express"
import dataFake from "../data/products.js"

const route = express.Router()

route.get('/products', (req,res) => {
    res.send(dataFake)
})

export default route