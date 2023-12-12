import React from 'react'

const Secondbutton = ({moveback, status2}) => {


  return (
    <div>
      <button style={{ backgroundColor: 'red' }} onClick={moveback} className="px-7 py-3 bg-blue-400 text-white rounded-lg ml-10">Undo</button> 
    </div>
  )
}

export default Secondbutton