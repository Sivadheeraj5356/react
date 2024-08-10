import { useState } from "react";
import { useContext } from "react";
import { useRecoilState, useRecoilValue , RecoilRoot } from "recoil";
import { countAtom } from "./store/atoms/count";
function App(){
   return (
    <div>
    <RecoilRoot>
     <Count></Count>
     </RecoilRoot>
    </div>
   )
}
function Count(){
  return <div>

    <CountRenderer></CountRenderer>
   <Buttons ></Buttons>
  </div>
}
function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    <h2 style={{fontFamily:"sans-serif"}}>Count is <b> {count} </b></h2>
  </div>
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)

  return <div>
     <button onClick={()=>{
      setCount(count +1)
     }}> Increase</button>
     <button onClick={()=>{
      setCount(count -1)
     }}> Decrease</button>
  </div>
}
 export default App