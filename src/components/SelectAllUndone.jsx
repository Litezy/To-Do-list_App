import React from 'react'

const SelectAllUndone = ({selectAllUncomplete}) => {
  return (
    <div>
         <input type="checkbox"  onChange={selectAllUncomplete} /> <span className='pl-2 font-semibold text-lg'>Select All</span>
    </div>
  )
}

export default SelectAllUndone