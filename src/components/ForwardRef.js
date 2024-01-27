import React, { useRef } from 'react'
import InputBox from './InputBox'

const ForwardRef = () => {
    let inputRef = useRef(null);
    function upDateInput(){
        inputRef.current.value = '1000'
        inputRef.current.style.color = 'red'
    }

  return (
    <div>
        <InputBox ref={inputRef}/>
      <button onClick={upDateInput}>Update input Box</button>
    </div>
  )
}

export default ForwardRef



// forwardRef is a feature in React that allows you to forward a ref from a child component to a 
// DOM element or another component. 
// It is particularly useful in scenarios where you want to access or interact with the underlying 
// DOM element or child component from a parent component.