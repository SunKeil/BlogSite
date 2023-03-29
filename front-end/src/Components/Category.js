import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Category() {
    const [cats,setCats] = useState([])

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get('/category')
            setCats(res.data)
        }
        getCats()
    },[])

  return (
    <div>
        <div className='categories -25'>
        {cats.map((c)=>(
          <Link to={`/blogs?=${c.name}`}><p>{c.name}</p></Link>   
        ))}
        </div>
    </div>
  )
}

export default Category
