import Nav from "./nav"
import Banner from './banner'
import Exploresection from "./technologies/exploresection"
import type { StackDataType } from "./stackDataType";
import { Suspense } from "react";

const stackPromise = async (): Promise<StackDataType[]> => {
  const res=await fetch('/data.json');
  const data=await res.json();
  return data
}

function App() {
  return (
    <>
    <div>
      <Nav/>
      <Banner/>
      <div className="">
        <Suspense fallback={<h2>Loading...</h2>}>
        <Exploresection wholestackPromise={stackPromise()}/>
      </Suspense>

      </div>
    </div>
    </>
  )
}

export default App
