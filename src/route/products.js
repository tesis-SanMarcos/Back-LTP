import express from "express"

const route = express.Router()

route.get('/products', (req,res) => {
    res.send("Nuevos productos ")
})

