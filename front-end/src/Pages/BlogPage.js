import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import CardPost from '../Components/CardPost'
import { useState } from 'react'
import axios from "axios"

import { useLocation } from 'react-router-dom'

function BlogPage() {


  const [posts, setPosts] = useState([])
  const {search} = useLocation()

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get('/posts' + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  return (
    <div>
        <div className='container'>
          <div className='header mt-5 ps-5 pe-5'>
            <div className='header-bot'>
                <h1 className='heading-main w-75'>Welcome!
                Look and learn from this peoples arts</h1>
                <p className='text-start w-50 pb-2'>Explore this website further to discover more about a person's deepest brain region.</p>
            </div>
          </div>
          
          <div className='blogs-wrapper mt-5 ps-5 pe-5 mt-2 '>
            <h4 className='text-start'>Posts</h4>
            <CardPost posts={posts}/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogPage
