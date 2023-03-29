import React, { useContext } from 'react'
import Footer from '../Components/Footer'
import { useState } from 'react'
import axios from "axios"
import  { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Context } from '../Context/Context'


function Post() {
  const location = useLocation()
  const path =location.pathname.split('/')[2]
  const [posts, setPost] = useState({})
  const PF ="http://localhost:3002/images/"
  const {user} = useContext(Context)

  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')
  const [update , setUpdate] = useState(false)

  //


  



  useEffect(()=>{
    const getPost = async ()=>{
      const res =await axios.get('/posts/'+ path)
      setPost(res.data)
      setTitle(res.data.title)
      setDescription(res.data.description)
    }
    getPost()
  },[path])
  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${posts._id}`, {
        data:{username:user.username}})
      window.location.replace('/blogs')
    }catch (err){}
    
  }
  const handleUpdate = async()=> {
    try{
      await axios.put(`/posts/${posts._id}`, 
        {username:user.username, 
        title, 
        description
      })
       setUpdate(false)
    }catch(err){}
  }

  return (
    <div>
       <div className='container  mt-5 ps-5 pe-5'>
        <div className='flex'>
        <div className='write-user'>
            <img src='' alt='user-img'/>
            <p className=''>{posts.username}</p>
        </div>
        <div>
          {posts.username === user?.username && (
            <div className='btns'>
              <div className='delete' onClick={()=>setUpdate(true)}>Edit</div>
              <div className='delete' onClick={handleDelete}>Delete</div>
            </div>
          )}
        </div>
        </div>
        <div className='image-post'>
          {posts.photo && <img src={PF + posts.photo} className='img-fluid user-profile-pic ' alt='user-imgs'/>} 
        </div>
        <p className='text-end'>{new Date(posts.createdAt).toDateString()}</p>  
        <div className='mt-2 input-update'>
            { update ? <input type="text" className='input-edit' value={title} onChange={(e)=>setTitle(e.target.value)}/> : (
              <h2 className='text-start'>{title}</h2>
            )}
            { update ? <textarea className='input-edit' value={description} onChange={(e)=>setDescription(e.target.value)}/> : (
             <p className='text-start mt-3'>{description}</p>
            )}
        </div>
        { update && (
          <div className='update-button'>
            <button className='updatebtn 'onClick={handleUpdate}>Update</button>
          </div>
        )}
        
      </div>
      <Footer/>
    </div>
  )
}

export default Post
