import React, { useContext, useState } from 'react'

import Visitbtn from '../Components/Visitbtn'

import { Link, useLocation } from 'react-router-dom'
import  { useEffect } from 'react'
import axios from 'axios'
import { Context } from '../Context/Context'



function Card({post}) {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [posts, setPost] = useState({})
    const PF ="http://localhost:3002/images/"
    const {user} = useContext(Context)

    useEffect(()=>{
        const getPost = async ()=>{
          const res =await axios.get('/posts/'+ path)
          setPost(res.data)
          
        }
        getPost()
      },[path])
  
  return (
    <div>
      <div className='blogs-card ' >
            <div className='blog-content'>
                <div className='blog-pic'>
                <img src={PF + post.photo} className="img-size" alt='blog-pic'/>
                </div>
                <div className='user-card pt-2'>
                <img src={PF + user.photo} alt='user-img' className='user-img '/>
                {/* <Link to={`/profile/?users=${post.username}`}></Link> */}
                <p>{post.username}</p>
                </div>
                <div className='blog-texts' value={posts}>
                <h5>{post.title}</h5>
                <Link to={`/posts/${post._id}`}> <Visitbtn/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
