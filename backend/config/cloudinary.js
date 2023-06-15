const cloudinary=require('cloudinary').v2

const cloudinaryConnectfn=()=>{
    cloudinary.config({
        cloud_name:"dtpuvixzh",
        api_key:"965528829726867",
        api_secret:"mqvZFH5nUkN6eNX3LBo9tbaPk9o"
    })
}

module.exports=cloudinaryConnectfn