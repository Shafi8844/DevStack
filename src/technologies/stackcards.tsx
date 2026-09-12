import type { StackDataType } from "../stackDataType";
import Star from '../assets/images.png'

export interface StackProps{
  eachstack:StackDataType
}

const stackcards = ({eachstack}:StackProps) => {
  return (
    <div className="border rounded-2xl border-gray-100 p-10 space-y-8">
       <div className="flex justify-between">
        <img className="w-12 object-contain" src={eachstack.icon} alt="" />
        <p>{eachstack.category}</p>
       </div>
       <h1 className="text-2xl font-semibold">{eachstack.name}</h1>
       <p>{eachstack.description}</p>
       <div className="flex justify-between">
        <button>{}</button>
        <p className="">{eachstack.difficulty}</p>
        <div className="flex">
          <img className="w-4 object-contain" src={Star} alt="" />
          <p>{eachstack.rating}</p>
        </div>
       </div>
       <button className="bg-black text-white">Add to Stack</button>
    </div>
  )
}

export default stackcards