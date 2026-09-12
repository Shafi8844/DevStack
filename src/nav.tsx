import Logo from './assets/logo-text.png'

export default function(){
  return (
    <div>
        <nav className='flex justify-between container mx-auto mt-2'>
            <img className='object-contain' src={Logo} alt="" />

            <ul className='flex gap-6 items-center'>
                <li className='text-regal-blue'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='flex gap-3 items-center'>
                <button>Sign In</button>
                <button className='text-white bg-regal-blue rounded-3xl w-24 h-12'>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}
