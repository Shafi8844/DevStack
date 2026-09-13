import type { StackDataType } from '../../stackDataType'
interface yourStackCardProps{
    yourStackCard:StackDataType
    Remove: (id: string) => void
}

const yourStackCard = ({yourStackCard,Remove}:yourStackCardProps)=> {
  return (
    <div className='flex items-center gap-3 rounded-lg border border-gray-100 px-3 py-2'>
        <div className='flex h-9 w-9 items-center justify-center rounded-md bg-gray-50'>
            <img className='w-6 object-contain' src={yourStackCard.icon} alt="" />
        </div>
        <div className='min-w-0 flex-1'>
            <h2 className='text-sm font-semibold text-black'>{yourStackCard.name}</h2>
            <p className='text-xs font-light'>{yourStackCard.category}</p>
        </div>
        <button
            onClick={() => Remove(yourStackCard.id)}
            className='text-xl font-light leading-none text-gray-400'
        >
            x
        </button>
    </div>
  )
}

export default yourStackCard
