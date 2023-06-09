const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const authRoute = require('./Routes/auth')
const userRoute = require('./Routes/user')
const postRoute =require('./Routes/post')
const catRoute =require('./Routes/category')
const multer = require('multer')
const path = require('path')

app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))
mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listen for request 
    app.listen('3002', ()=>{
        console.log('connected to db and listening to port',process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err)
})
   
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb) =>{
        cb(null,req.body.name)
    }
})

const upload =multer({storage:storage})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json('file has been uploaded')
})

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/category',catRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`listening to ${process.env.PORT}`)
})