import Nav from "./components/nav"
import Banner from './components/banner'
import Exploresection from "./components/technologies/exploresection"
import type { StackDataType } from "./stackDataType";
import { Suspense } from "react";
import Footer from "./components/footer";

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
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
