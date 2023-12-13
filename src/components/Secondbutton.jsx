import React from 'react'

const Secondbutton = ({moveback, status2}) => {


  return (
    <div>
      <button style={{ backgroundColor: 'red' }} onClick={moveback} className="px-5 py-2 bg-blue-400 text-white rounded-lg ml-24">undo task</button> 
    </div>
  )
}

export default Secondbutton