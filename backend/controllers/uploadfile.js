

const cloudinary=require('cloudinary').v2
async function uploadtocloudinary(file,folder,quality){
    let options={folder}
    options.resource_type="auto"
    if(quality){
        options.quality=quality
    }
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}
const uploadfn=async (req,res)=>{
    try{
        const file=req.files.file
        console.log(file)
        const response=await uploadtocloudinary(file,"newfoler")
        
             return res.status(200).json({
                success:true,
                message:"done add",
                response:response
             })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"failed",
            response:err.message
         })
    }
}
module.exports=uploadfn