const { response } = require('express')
const express = require('express')

const userModel = require('../models/UserModel')

const router = express.Router()

router.post("/register",(request,response)=>
{
    console.log(request.body)
    userModel.saveUser(request.body,(result)=>
    {
        response.json({status:result})
    })
})

router.post("/login",(request,response)=>
{
    console.log(request.body)
})

module.exports = router