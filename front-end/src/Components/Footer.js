import React from 'react'
import logo from '../Components/images/logo.png'

function Footer() {
  return (
    <div>
        <div className='container mb-2 mt-5'>
            <div className='border-bot'>
                <div className='footer-links'>
                    <p>Copy Rigths</p>
                    <p>Contact: 09983832092</p>
                    <p>Email: alcakeilsun@gmail.com</p>
                </div>
                <div className='footer-logo'>
                    <img  className='img-fluid' src={logo} alt="footerlogo"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
