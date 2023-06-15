const express=require('express')
const app=express()
const cors=require('cors')
const fileuploader=require('express-fileupload')
app.use(fileuploader({
    // this flag should be true is imp, if we dont the when we send file through request it doesnt store anything at tempfile location
    useTempFiles:true,  
    tempFileDir:'/tmp/'
}))
app.use(cors())
app.use(express.json())
const router=require('./routes/router')
app.use("/api/v1",router)
const cloudinaryConnectfn=require('./config/cloudinary')
cloudinaryConnectfn()

app.listen(4000,()=>{
    console.log("port running ",4000)
})

