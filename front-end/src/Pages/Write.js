import React, { useContext, useState } from 'react'
import Edit from '../Components/Edit'
import Footer from '../Components/Footer'
import Delete from '../Components/Delete'
import axios from 'axios'


import { Context } from '../Context/Context'

function Write() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)
     const PF ="http://localhost:3002/images/"

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            description
        }
        if(file){
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name",filename)
            data.append('file',file)
            newPost.photo = filename
            try{
                await axios.post('/upload',data)
            }catch (err){

            }
        }
        try{
            const res = await axios.post('/posts', newPost)
            window.location.replace('/posts/' + res.data._id)
        }catch(err){}
       
    }
  return (
    <div>
        <div className='container mt-5 ps-5 pe-5'>
            <h1 className='heading-main'>Today, create something and share it with all site visitors and users.</h1>
            <div className='header-bot pb-3 wrapper-user mt-5'>
                <div className='write-user'>
                    <img src={PF + user.photo} alt='user-img' className='user-img'/>
                    <p className='write-user'>{user.username}</p>
                </div>
                <div className='update'>
                    <Edit/><Delete/>
                </div>
                
            </div>
            <h5 className='text-start'>Upload Image</h5>
            
            
            <form className='form' onSubmit={handleSubmit}>
                <div className='image-upload'>
                    { file && (
                        <img src={ URL.createObjectURL(file)} alt="uploadedimg" className='fileinputimage-write img-fluid'/>
                    )}
                </div>
                <input type="file"
                id="fileinput"
                onChange={(e)=> setFile(e.target.files[0])}/>
                <label><h6 className='text-start mt-2'>Post title:</h6></label>
                <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
                <label><h6 className='text-start mt-2'>Post description:</h6></label>
                <input type="text" onChange={(e)=> setDescription(e.target.value)}/>
                <button type='submit' className='submit mt-3'>Submit</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Write
