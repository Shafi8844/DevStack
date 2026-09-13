import Logo from '../assets/logo-text.png'
const footer = () => {
  return (
    <div className='container mx-auto px-6 sm:px-0'>
        <div className='mt-20 flex flex-col items-center text-center font-light sm:mt-28 sm:flex-row sm:items-start sm:justify-between sm:text-left'>
        <div className='space-y-8 sm:space-y-3'>
            <img className='mx-auto w-[168px] sm:mx-0 sm:w-auto' src={Logo} alt="Dev Stack" />
            <p className='mx-auto max-w-[920px] text-2xl leading-[1.65] text-[#6B7280] sm:mx-0 sm:max-w-none sm:text-base sm:leading-normal sm:text-inherit'>Curated tools, technologies, and resources for developers building
            modern software.</p>
            <div className='flex items-center justify-center gap-8 text-2xl text-[#4B5563] sm:justify-start sm:gap-4 sm:text-base'>
                <p>GitHub</p>
                <span className='text-xl font-bold'>•</span>
                <p>Twitter</p>
                <span className='text-xl font-bold'>•</span>
                <p>LinkedIn</p>
            </div>
        </div>
        <div className='hidden justify-center space-x-15 sm:flex'>
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
    <hr className="mt-16 border-gray-100 sm:mt-24" />
    <div className='mt-10 flex flex-col gap-5 pb-16 text-lg font-light text-[#9CA3AF] min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between sm:mt-2 sm:pb-7 sm:text-xs sm:text-inherit'>
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className='flex space-x-6 sm:justify-between sm:space-x-4'>
            <p>Privacy</p>
            <p>Terms</p>
        </div>
    </div>
    </div>
    
  )
}

export default footer
