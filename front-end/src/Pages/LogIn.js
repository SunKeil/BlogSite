import axios from 'axios'
import React, { useContext, useRef } from 'react'
import smileshark from '../Components/images/smileshark(2).png'
import { Context } from '../Context/Context'


function LogIn() {


    const userRef = useRef()
    const passwordRef = useRef()
    const {dispatch ,isFetching} = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        }catch (error){
            dispatch({type:"LOGIN_FAILURE"})
        }
    }


  return (
    <div className='container'>
       <div className='header mt-3 ps-5 pe-5'>
            <div>
                <h1 >Login and post your thoughts now!</h1>
                <div className='login-form mt-5'>
                <div className='me-3'>
                    <img src={smileshark} className='img-shark' alt='loginimg'/>
                </div>
                <form className='login-form-inputs ' onSubmit={handleSubmit}>
                    <label><h6 className='text-start mt-2'>Username:</h6></label>
                    <input type="text" className='loginputs'ref={userRef}/>
                    <label><h6 className='text-start mt-2'>Password:</h6></label>
                    <input type="password" className='loginputs' ref={passwordRef}/>
                    <button type='submit' className='submit mt-3' disabled={isFetching}>Login</button>
                </form>
            </div>
            </div>
            <div className='logsubtext'>
                <p className='logtext pt-5 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </div>
    </div>
  )
}

export default LogIn
