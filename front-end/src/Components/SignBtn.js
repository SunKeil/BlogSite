import React from 'react'
import {Link} from "react-router-dom"
function SignBtn() {
  return (
    <div>
      <Link to="write"><div className='signbtn'>Write</div></Link> 
    </div>
  )
}

export default SignBtn
