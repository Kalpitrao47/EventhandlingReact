import React, { useState } from 'react'

const HigherOrderComponent = () => {
  return (
    <div>
        <Counter cmp={Hoc}/>
    </div>
  )
}

const Hoc = () => {
    const [count,setCount] = useState(0);

    const handleCount = () =>{
        setCount(count+1)
    }
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>Counter</button>
      </div>
    )
  }

const Counter = (props) =>{
    return (
        <h1><props.cmp/></h1>
    )
}



export default HigherOrderComponent
