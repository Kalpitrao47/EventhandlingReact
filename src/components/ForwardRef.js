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
