import { Suspense, use } from "react"
import Stackcard from "./stackcards"
import type { StackDataType } from "../stackDataType"

interface ExploresectionProps {
  wholestackPromise: Promise<StackDataType[]>
}

const exploresection = ({ wholestackPromise }: ExploresectionProps) => {
  const wholestack = use(wholestackPromise)
  return (

    <div className="container mx-auto mt-6 space-y-4">
        <h1 className="text-4xl font-bold">Explore the <span className="text-transparent bg-clip-text bg-linear-65 from-orange-500 via-pink-500 to-violet-500">Technologies</span></h1>
        <p>Pick one technology per category to build your ideal stack</p>
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-4">
            {
            wholestack.map(item=> <Stackcard key={item.id} eachstack={item}></Stackcard>)
          }
          </div>
        </div>
    </div>
  )
}

export default exploresection 
