import React, { useContext, useState } from 'react'
import Footer from '../Components/Footer'
import { Context } from '../Context/Context'
import axios from 'axios'
// import axios from "axios"
// import CardPost from '../Components/CardPost'
// import { useState } from 'react'
// import { useEffect } from 'react'



function Profile() {
  const {user , dispatch} = useContext(Context)
  const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [Contact, setContact] = useState("")
    const [Nationality, setNationality] = useState("")
    const [aboutme, setAboutme] = useState("")
    const [file, setFile] = useState(null)
    const [success,setSuccess] = useState(false)
    const PF ="http://localhost:3002/images/"
  


    const handleSubmit = async (e)=>{
      e.preventDefault();
      dispatch({type: "UPDATE_START"})
      const updateUser = {
          userId:user._id,
          username,
          email,
          aboutme,
          Contact,
          Nationality
      }
     
      if(file){
          const data = new FormData()
          const filename = Date.now() + file.name
          data.append("name",filename)
          data.append('file',file)
          updateUser.photo = filename
          try{
              await axios.post('/upload',data)
          }catch (err){

          }
      }
      try{
         const res = await axios.put('/users/' + user._id, updateUser)
          setSuccess(true)
       
          dispatch({type: "UPDATE_SUCCESS", payload: res.data})
      }catch(err){
        dispatch({type: "UPDATE_FAILURE"})
        
      }
     
  }

  


  return (
    <div>
      <div className='container  mt-5 ps-5 pe-5'>
        <div className='row'>
            <div className='img-user-profile col'>  
            
              
              <form className='profile-form' onSubmit={handleSubmit}>
                <img src={ file ? URL.createObjectURL(file) : PF + user.photo}  className='fileinputimage '/>
                <label>Upload profile image:</label>
                <input className='profile-file' type="file" onChange={(e)=> setFile(e.target.files[0])}/>
              </form> 
                            
            </div>
            <div className='img-details-profile col'>
            
              <form className='profile-form' onSubmit={handleSubmit}>
                <label>Update username:</label>
                <input value={username}  className='profile-put' type="text" onChange={(e)=> setUsername(e.target.value)}/>
                <label>Update about:</label>
                <textarea  value={aboutme} className='profile-put' type="text" onChange={(e)=> setAboutme(e.target.value)}/>
                <label>Update email:</label>
                <input value={email} className='profile-put' type="email" onChange={(e)=> setEmail(e.target.value)}/>
                <label>Add contact:</label>
                <input value={Contact} className='profile-put' type="contact" onChange={(e)=> setContact(e.target.value)}/>
                <label>Add nationality:</label>
                <input value={Nationality} className='profile-put' type="text" onChange={(e)=> setNationality(e.target.value)}/>
                <button type="submit">Submit</button>
                {success && (
                  <span>Success update</span>
                )}
              </form>
              </div>
                <div className='name mt-5'>
                    <h1  className='text-start'>Hello Im {user.username}</h1>
                    <h5  className='text-start user-h'>Student/Artist</h5>
                </div>
                <div className='aboutme'>
                    <h6 className="text-start">About me:</h6>
                    <p className="text-start"> {user.aboutme}</p>
                </div>
                <div className='Contact'>
                    <h6 className="text-start">Contacts:</h6>
                    <p className="text-start">Email: {user.email}</p>
                    <p className="text-start">Contact: {user.Contact}</p>
                    <p className="text-start">Nationality: {user.Nationality}</p>
                </div>
                
            
              
              
                {/* <div className='name'>
                    <h1  className='text-start'>Hello Im {user.username}</h1>
                    <h5  className='text-start user-h'>Student/Artist</h5>
                </div>
                <div className='aboutme'>
                    <h6 className="text-start">About me:</h6>
                    <p className="text-start"> {user.aboutme}</p>
                </div>
                <div className='Contact'>
                    <h6 className="text-start">Contacts:</h6>
                    <p className="text-start">Email: {user.email}</p>
                    <p className="text-start">Contact: {user.Contact}</p>
                    <p className="text-start">Nationality: {user.Nationality}</p>
                </div> */}
                
               
               
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile
