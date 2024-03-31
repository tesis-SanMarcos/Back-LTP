import express from "express"
import data from "./src/data/data.js"
const app = express()
const port = process?.env?.PORT || 8000

app.listen(port, function(err){
    console.log(` servidor http://localhost:${port}`);
})

app.get('/api/products' , (req , res )=> {
    res.send(data.products)
})