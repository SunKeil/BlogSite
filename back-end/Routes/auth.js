const router = require('express').Router()
const User = require('../Models/User')
const bcrypt = require('bcrypt')

//register
router.post('/register', async (req,res)=>{
    try{
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        //requesting data from the user
         const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
         })
         // saving the data requested from the user
         const user = await newUser.save()
         res.status(200).json(user)

    }catch (err){
        res.status(500).json(err)
    }
})

//LOGIN
router.post('/login',  async (req,res)=>{
    try{
        // looking for the same username to login
        const user = await User.findOne({username: req.body.username})
        // if not username the send error
        !user && res.status(400).json('wrong credentials')
        // comparing the password if not == then error
        const validate = await bcrypt.compare(req.body.password, user.password)
        !validate && res.status(400).json('wrong credentials')
        // only getting the other object properties but not including the password
        const {password, ...others} = user._doc
        res.status(200).json(others)
        
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router