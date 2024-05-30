import express from "express"
import cors from "cors"
import apiProducts from "./routes/products.js"
import dataFake from "./data/products.js"

const app = express()
const port = process?.env?.PORT || 5000

app.use(cors())

app.get('/' , (req , res )=> {
    res.send('server is ready')
})
app.use(apiProducts , (req , res ) => {
    res.send(dataFake)
})

app.listen(port, function(err){
    console.log(` servidor http://localhost:${port}`);
})

