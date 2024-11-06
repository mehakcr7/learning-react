import React,{useState} from 'react'

function CounterMain() {
    const [a,setA] =useState(0)
  return (
    <div>
      <button onClick={()=>{
        setA(a+1)
      }}>click me</button>
      <br />
      <button onClick={()=>{
        setA(a-1)
      }}>click me</button>
      <br />
      {a}
    </div>
  )
}

export default CounterMain
