import React from 'react'
import Logo from '../assets/logo-text.png'
const footer = () => {
  return (
    <div className='flex justify-between container mx-auto mt-20 font-light'>
        <div>
            <img src={Logo} alt="" />
            <p>Curated tools, technologies, and resources for developers building
            modern software.</p>
            <div className='flex'>
                <p >Github</p>
                <p>Twitter</p>
                <p>Linkedin</p>
            </div>
        </div>
        <div className='flex justify-center space-x-15'>
            <div>
                <h1>Product</h1>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
            </div>
            <div>
                <h1>Company Legal</h1>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
            </div>
            <div>
                <h1>Legal</h1>
                <p>Privacy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    </div>
  )
}

export default footer