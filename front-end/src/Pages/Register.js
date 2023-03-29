import React from 'react'
import shark from '../Components/images/shark.jpg'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handlesubmit = async (e)=>{
        e.preventDefault();
        setError(false)
        try{
            const res = await axios.post('/auth/register',{
                username,email ,password
            })
            res.data && window.location.replace('/login')
        }catch (err){
            setError(true)
        }
       
    }

  return (
    <div className='container'>
      <div className='header mt-3 ps-5 pe-5'>
            <div>
                <h1 >Login and post your thoughts now!</h1>
                <div className='login-form mt-5'>
                <div className='me-3'>
                    <img src={shark} className='img-shark' alt='loginimg'/>
                </div>
                <form className='login-form-inputs ' onSubmit={handlesubmit}>
                    <label><h6 className='text-start mt-2'>Username:</h6></label>
                    <input type="text" className='loginputs'onChange={e=>setUsername(e.target.value)}/>
                    <label><h6 className='text-start mt-2'>Email:</h6></label>
                    <input type="text" className='loginputs'onChange={e=>setEmail(e.target.value)}/>
                    <label><h6 className='text-start mt-2'>Password:</h6></label>
                    <input type="text" className='loginputs'onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit' className='submit mt-3'>Submit</button>
                </form>
                { error && <span>Something went wrong!</span>}
            </div>
            </div>
            <div className='logsubtext'>
            <p className='logtext pt-5 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </div>
    </div>
  )
}

export default Register
