import { use, useState } from "react"
import Stackcard from "./stackcards"
import type { StackDataType } from "../../stackDataType"
import YourStack from "../yourstack/yourStack"

interface ExploresectionProps {
  wholestackPromise: Promise<StackDataType[]>
}

const exploresection = ({ wholestackPromise}: ExploresectionProps) => {
  const wholestack = use(wholestackPromise)

  const [yourStack,setYourStack]=useState<StackDataType[]>([])

  return (

    <div className="container mx-auto mt-6 flex flex-col gap-8 max-md:gap-6 max-md:px-3 lg:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-black max-md:text-2xl">Explore the <span className="text-transparent bg-clip-text bg-(image:--gradient-brand)">Technologies</span></h1>
        <p className="font-light max-md:text-xs">Pick one technology per category to build your ideal stack</p>
        <div className="mt-10 max-md:mt-6">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {
            wholestack.map(item=> <Stackcard 
              key={item.id}
              eachstack={item}
              yourStack={yourStack}
              setYourStack={setYourStack}
               ></Stackcard>)
          }
          </div>
        </div>
        </div>
        <div className="pt-26 lg:w-72 xl:w-80">
          <YourStack yourStack={yourStack} setYourStack={setYourStack}>
        </YourStack>
        </div>
    </div>
  )
}

export default exploresection 
