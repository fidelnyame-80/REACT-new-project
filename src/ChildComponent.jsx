import React, { useEffect, useState } from 'react'

const ChildComponent = () => {
//create state for our lifecycle
const [count ,setCount] = useState(0)
    //...........(1).....creating a lifecycle using UseEffect()
    useEffect(() => {
        console.log("component mounted");

        return() => {
            console.log("component unmounted")
        }
    },[])

    //.........(2).....changing the component or updating ....
    useEffect(() => {
       console.log("component updated")
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <button style={{backgroundColor: "green"}} onClick={() => {setCount(count + 1)}}>Click to count</button>
    </div>
  )
}

export default ChildComponent;
