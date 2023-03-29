const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({

     username: {
        type: String,
        required: true,
        unique: true
     },
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true,
       
     },
     photo: {
        type: String,
        default: ''
     },
     aboutme: {
      type: String,
      required:false
   },
   Contact: {
      type: String,
      required:false
   },
   Nationality: {
      type: String,
      required:false
   },
   Name: {
      type: String,
      required:false
   },
},{timestamps:true})

module.exports = mongoose.model('Users', UserSchema)