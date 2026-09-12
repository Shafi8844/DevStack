import banimg from './assets/banner-stack.png'

const banner = () => {
  return (
    <div className='container mx-auto flex items-center justify-center' >
        <div className='space-y-12'>
            <h2 className='text-5xl font-bold'>Build Your Ideal <br />
            <span className='text-transparent bg-clip-text bg-linear-65 from-orange-500 via-pink-500 to-violet-500'>Development Stack</span>
            </h2>
            <p>Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your <br />
            next project.</p>
            <div className='space-x-4'>
                <button className='bg-linear-65 from-orange-500 via-pink-500 to-violet-500 h-12 w-48 text-white rounded-xl'>Explore Technologies</button>
                <button className='border-2 rounded-xl border-gray-100 h-12 w-48'>Learn More</button>
            </div>
            
        </div>
        <div>
            <img src={banimg} alt="" />
        </div>
    </div>
  )
}

export default banner
