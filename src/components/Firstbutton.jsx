import React from 'react'

const Firstbutton = ({moveSelected, status}) => {
  
    return (
      <div>
         <button style={{ backgroundColor: 'green' }} onClick={moveSelected} className="px-7 py-3 bg-blue-400 text-white rounded-lg ml-10">{status ? ' done' : 'undone'}</button>
      </div>
    )
  }

export default Firstbutton