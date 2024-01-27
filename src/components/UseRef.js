import React, { useRef } from 'react'

const UseRef = () => {
    let inputRef = useRef(null);

    function handleInput(){
        console.log("Form Submitted", {
            name: inputRef.current.value,
          });
      
    }

  return (
    <div>
      <input type='text' placeholder='Enter your name' ref={inputRef} className='border border-black'/>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default UseRef
