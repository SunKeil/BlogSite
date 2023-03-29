const router = require('express').Router()
const User = require('../Models/User')
const Post = require('../Models/Post')

//create
router.post('/', async (req,res)=>{
   const newPost = new Post(req.body)
   try{
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
   }catch(err){
    res.status(500).json(err)
   }
   
})
//update
router.put('/:id', async (req,res)=>{
   try{
    const post = await Post.findById(req.params.id)
    if(post.username === req.body.username){
        try{
            const updatePost = await Post.findByIdAndUpdate(
                req.params.id, 
            {
                $set: req.body
            },
            {   new: true
            }
            )
            res.status(200).json(updatePost)
        }catch(err){
            res.status(500).json(err)
        } 
    }else{
        res.status(401).json("You can only uodate your post")
    }
   }catch(err){
    res.status(500).json(err)
   }
})
//delete
router.delete('/:id', async (req,res)=>{
    try{
     const post = await Post.findById(req.params.id)
     if(post.username === req.body.username){
         try{
             await post.deleteOne()
             res.status(200).json('this post is deleted')
         }catch(err){
             res.status(500).json(err)
         } 
     }else{
         res.status(401).json("You can only delete your post")
     }
    }catch(err){
     res.status(500).json(err)
    }
 })
//get post
router.get('/:id', async (req,res)=>{
    try{    
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch (err){
        res.status(500).json(err)
    }
})

//get all post
router.get('/', async (req,res)=>{
    const username = req.query.user
    const catName = req.query.cat
    try {
        let posts
        if(username){
            posts = await Post.find({username:username})
        } else if (catName){
            posts = await Post.find({categorie:{
                $in:[catName]
            }})
        }else {
            posts =  await Post.find()
        }
        res.status(200).json(posts)
    }catch (err){
        res.status(500).json(err)
    }
})


module.exports = router