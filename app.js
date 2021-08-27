const express = require('express')
const path = require('path')

const app = express()

const userRouter = require('./server/routers/UserRouter')

app.use(express.static(path.join(__dirname,'build')))
app.use(express.urlencoded())
app.use(express.json())

app.use("/user",userRouter)

app.listen(8989,function()
{
    console.log('http://localhost:8989')
})