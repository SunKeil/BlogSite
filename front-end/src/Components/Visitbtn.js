import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom"
import { Context } from '../Context/Context'

function Visitbtn({post}) {
  // const location = useLocation()
  // const path = location.pathname.split('/')[2]
  // const [Post, setPost] = useState({})
  // const PF ="http://localhost:3002/images/"
  // const {user} = useContext(Context)

  

  //   useEffect(()=>{
  //       const getPost = async ()=>{
  //         const res =await axios.get('/posts/'+ path)
  //         setPost(res.data)
  //       }
  //       getPost()
  //     },[path])
  return (
    <div>
       <div className='visit'>Visit</div>
    </div>
  )
}

export default Visitbtn
