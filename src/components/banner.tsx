import banimg from '../assets/banner-stack.png'

const banner = () => {
  return (
    <div className='container mx-auto flex items-center justify-center max-md:flex-col max-md:px-3 max-md:text-center' >
      <div className='space-y-12 max-md:space-y-6'>
        <h2 className='text-5xl font-bold text-black max-md:text-3xl'>Build Your Ideal <br />
            <span className='text-transparent bg-clip-text bg-(image:--gradient-brand)'>Development Stack</span>
            </h2>
            <p className="font-light max-md:text-sm">Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your <br />
            next project.</p>
            <div className='space-x-4 max-md:flex max-md:gap-3 max-md:space-x-0'>
              <button className='bg-(image:--gradient-brand) h-12 w-48 text-white rounded-xl max-md:w-36 max-md:text-sm'>Explore Technologies</button>
              <button className='border-2 rounded-xl border-gray-100 h-12 w-48 max-md:w-36 max-md:text-sm'>Learn More</button>
            </div>
            
        </div>
          <div className='max-md:mt-4'>
            <img className='max-md:w-72' src={banimg} alt="" />
        </div>
    </div>
  )
}

export default banner
