import Logo from '../assets/logo-text.png'

export default function(){
  return (
    <div>
        <nav className='flex justify-between container mx-auto mt-2 max-md:px-3'>
          <img className='object-contain max-md:w-24' src={Logo} alt="" />

          <ul className='flex gap-6 items-center max-md:hidden'>
                <li className='text-regal-blue'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='flex gap-3 items-center max-md:hidden'>
                <button>Sign In</button>
                <button className='text-white bg-regal-blue rounded-3xl w-24 h-12'>Sign Up</button>
            </div>
            <button className='text-xl max-md:block md:hidden'>☰</button>
        </nav>
    </div>
  )
}
