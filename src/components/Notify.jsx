import React from 'react'

const Notify = ({text, color, closeView}) => {
  return (
    <div className={`${color} notify`}>
        <div className="w-full flex items-center justify-between h-16 ">
            <p className='text-2xl font-bold'>{text}</p>
            <div onClick={closeView} className={`cursor-pointer text-3xl px-3 py-1 text-white bg-grey rounded-md`}>X</div>
        </div>
    </div>
  )
}

export default Notify