import Logo from '../assets/logo-text.png'
const footer = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between  mt-28 font-light'>
        <div className='space-y-3'>
            <img src={Logo} alt="" />
            <p>Curated tools, technologies, and resources for developers building
            modern software.</p>
            <div className='flex space-x-4'>
                <p className='font-semibold'>Github</p>
                <p className='font-semibold'>Twitter</p>
                <p className='font-semibold'>Linkedin</p>
            </div>
        </div>
        <div className='flex justify-center space-x-15'>
            <div>
                <h1 className='font-bold '>Product</h1>
                <div className='mt-3 space-y-1.5'>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Company Legal</h1>
                <div className='mt-3 space-y-1.5'>
                <p >About</p>
                <p>Contact</p>
                <p>Careers</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Legal</h1>
                <div className='mt-3 space-y-1.5'>
                <p>Privacy</p>
                <p>Terms of Service</p>
                </div>
            </div>
        </div>
    </div>
    <hr className="border-gray-100 mt-24" />
    <div className='mt-2 font-light flex justify-between text-xs pb-7'>
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className='flex justify-between space-x-4'>
            <p>Privacy</p>
            <p>Terms</p>
        </div>
    </div>
    </div>
    
  )
}

export default footer