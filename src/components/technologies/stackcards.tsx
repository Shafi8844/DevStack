import type { StackDataType } from "../../stackDataType";
import Star from '../../assets/images.png'
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

export interface StackProps{
  eachstack:StackDataType
  yourStack:StackDataType[]
  setYourStack: Dispatch<SetStateAction<StackDataType[]>>
}

const stackcards = ({eachstack,yourStack,setYourStack}:StackProps) => {

  const [isSelected,setSeleted]=useState(false);
  const isInStack = yourStack.some((item) => item.id === eachstack.id);


  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm transition max-md:p-3 ${isInStack ? "border-sky-500 ring-2 ring-sky-500" : "border-gray-100"}`}>
       <div className="flex justify-between">
      <img className="w-12 object-contain max-md:w-9" src={eachstack.icon} alt="" />
        <p className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-light text-sky-500">{eachstack.badge}</p>
       </div>
      <div className="mt-8 space-y-4 max-md:mt-4 max-md:space-y-3">
      <h1 className="text-xl font-semibold text-black max-md:text-base">{eachstack.name}</h1>
      <p className="min-h-16 text-sm font-light leading-relaxed max-md:min-h-0 max-md:text-xs">{eachstack.description}</p>
       <hr className="border-gray-100" />
      <div className="flex justify-between items-center gap-3 text-xs max-md:gap-1 max-md:text-[10px]">
        <button className="rounded-md bg-gray-100 px-3 py-1 font-light">{eachstack.category}</button>
        <p className="font-light">{eachstack.difficulty}</p>
        <div className="flex gap-2">
          <img className="w-4 object-contain" src={Star} alt="" />
          <p className="font-light">{eachstack.rating}</p>
        </div>
       </div>
       <button
       onClick={()=>{
        if (isInStack) {
          toast.warning(`${eachstack.name} is already in your stack!`)
          return
        }

        const newYourStack=[...yourStack,eachstack];
        setYourStack(newYourStack);
        setSeleted(true);
        toast.success(`${eachstack.name} has been added to your stack!!`)
       }}
        className="btn mt-4 w-full rounded-lg border-none bg-gray-950 text-white font-light">
        {
          isSelected ===false ? 'Add to Stack':'Added to Stack'
        }
       </button>
       </div>
    </div>
  )
}

export default stackcards
