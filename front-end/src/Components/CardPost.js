import React from 'react'
import Card from './Card'




function CardPost({posts}) {
  return (
    <div className='cardwrappers'>
       {posts.map((p)=>(
        <Card post={p}/>
       ))}
    </div>
  )
}

export default CardPost
