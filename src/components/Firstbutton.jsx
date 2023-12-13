import React from 'react'

const Firstbutton = ({moveSelected, status}) => {
  
    return (
      <div>
         <button style={{ backgroundColor: 'green' }} onClick={moveSelected} className="px-5 py-2 mb-4 md:mb-0 bg-blue-400 text-white rounded-lg ml-20 md:ml-10">mark as done</button>
      </div>
    )
  }

export default Firstbutton