const express=require('express')
const routers=express.Router()

const uploadfn=require('../controllers/uploadfile')
routers.post("/uploadhere",uploadfn)
module.exports=routers