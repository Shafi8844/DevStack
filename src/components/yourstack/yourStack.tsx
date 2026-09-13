import type { Dispatch, SetStateAction } from "react"
import type { StackDataType } from "../../stackDataType"
import YourStackCard from "./yourStackCard"
import { toast } from "react-toastify"
interface yourStackprops{
  yourStack:StackDataType[]
  setYourStack: Dispatch<SetStateAction<StackDataType[]>>
}
const yourStack = ({yourStack,setYourStack}:yourStackprops) => {
  const handleRemove = (id: string) => {
    const removedStack = yourStack.find((item) => item.id === id)
    setYourStack(yourStack.filter((item) => item.id !== id))
    if (removedStack) {
      toast.info(`${removedStack.name} has been removed from your stack.`)
    }
  }

  return (
    <div className="sticky top-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm max-md:p-3">
      <h2 className="font-semibold text-black">Your Stack</h2>
      <p className="text-xs font-light">{yourStack.length} Technology Selected</p>
      <div className="mt-5 space-y-3">
        {
          yourStack.map(item=><YourStackCard yourStackCard={item} key={item.id} Remove={handleRemove}></YourStackCard>)
        }
      </div>
      <button
        onClick={() => {
          setYourStack([])
          toast.warning("All technologies have been removed from your stack.")
        }}
        className="btn mt-10 w-full rounded-lg border-red-200 bg-white text-red-500"
      >
        Remove All
      </button>
    </div>
  )
}

export default yourStack
 