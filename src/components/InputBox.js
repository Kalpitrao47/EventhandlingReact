import React, { forwardRef } from 'react'

const InputBox = (props,ref) => {
  return (
    <div>
      <input className='border border-black' placeholder='Enter input'ref={ref}/>
    </div>
  )
}

export default forwardRef(InputBox);
