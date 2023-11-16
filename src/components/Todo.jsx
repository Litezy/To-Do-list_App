import React, { useState } from 'react'

const Todo = ({ task, handleMove, isDone, color,selectedtask, setSelectedtask}) => {
    const [active, setActive] = useState(false)
    
  
    const handleChange = () => {
         setActive(!active)
    };
    const button = isDone ? 'Undo': 'mark as done'

    return (
        <div className="border-2 head">
            <div className=" border-2 font-semibold todo px-10 py-4 mt-3 flex item-center justify-between  ">
                <input className=' self-stretch input' type="checkbox" onChange={handleChange} />
                <h4 className=' capitalize text-2xl'>{task.taskName}</h4>
            </div>
            {active ? <button style={{backgroundColor: color}} onClick={handleMove} className='px-2 move py-1 bg-red-400 rounded-md text-white'>{button}</button> : null}
        </div>


    )
}

export default Todo


// const [active, setActive] = useState(false)
// return (
//     <div className=" border-2 font-semibold todo px-2 py-4 mt-3 flex itesm-center justify-between relative">
//         <h4 className=' capitalize text-2xl'>{task.taskName}</h4>
//         <button onClick={() => setActive(!active)} className='absolute bottom-2 px-4 bg-blue-400 rounded-sm text-[.8rem] cursor-pointer text-white'>{active ? `Done` : 'mark as done'}</button>
//         <div className="flex flex-col items-center justify-center">
//             <div className="">Time interval</div>
//             <h3>From {initialTime} To {finalTime}</h3>
//         </div>
//         <button onClick={() => deletefunc(task.id)} className='px-5 py-3 bg-red-400 rounded-md text-white'>Delete</button>
//     </div>
// )
// }