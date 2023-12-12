import React, { useState, useEffect } from 'react'
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Firstbutton from './Firstbutton';

const Todo = ({ item,progress2, handleEdit2, Deletetask2,finallist, setFinalList,ToggleHandler2,updateMessage }) => {
 


  const [form, setForm] = useState({
    title: item.title,
    date: item.date,
    time: item.time
  })
  const [editTitle, setEditTitle] = useState(false)
  const [editDate, setEditDate] = useState(false)
  const [editTime, setEditTime] = useState(false)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleEditMode = () => {
    setEditTitle(!editTitle)
  }
  const handleEditMode2 = () => {
    setEditDate(!editDate)
  }
  const handleEditMode3 = () => {
    setEditTime(!editTime)
  }
  const handleSubmission = (e) => {
    e.preventDefault()
    const updateForm = {
      title: editTitle ? form.title : item.title,
      date: editDate ? form.date : item.date,
      time: editTime ? form.time : item.time
    }
    handleEdit2(item.id, updateForm)
    setEditTitle(false)
    setEditDate(false)
    setEditTime(false)
  }
  const cancelEdit = (e) => {
    e.preventDefault()
    setEditTitle(false)
    setEditDate(false)
    setEditTime(false)
  }

  const Duplicate = (id) => {
    const oldArray = finallist.filter((item) => item.id === id)
    const newArray = [...finallist,...oldArray ]
    setFinalList(newArray)
    console.log(item.id)
    updateMessage('Task Diplicated Successfully', 'green' ,true)
  }

return (
  <div className='mt-2 rounded-md px-2 bg-purple-400'>
    <div className="w-full ">
      <div className="flex items-center justify-between font-bold text-lg ">

        <h4 className='font-bold'>Task</h4>
        {editTitle ? <form className='bg-green-300' onSubmit={handleSubmission}>
          <input className='px-2' type="text" name="title" value={form.title} onChange={handleChange} />
          <div className="flex items-center justify-between my-2 px-2">
            <button type='button' onClick={cancelEdit} className='text-2xl cursor-pointer text-red-500'><MdCancel /></button>
            <button className='text-2xl cursor-pointer'><FaCheckCircle /></button>
          </div>
        </form> : <div className="flex items-center gap-5 pr-3">
          <p className='capitalize'>{item.title}</p>
          <CiEdit className='cursor-pointer text-2xl' onClick={handleEditMode} />
        </div>}
      </div>


      <div className="flex items-center justify-between font-bold text-lg ">
        <h4>Date</h4>
        {editDate ? <form className='bg-green-300' onSubmit={handleSubmission}>
          <input type="date" name="date" value={form.date} onChange={handleChange} />
          <div className="flex items-center justify-between my-2 px-2">
            <button type='button' onClick={cancelEdit} className='text-2xl cursor-pointer text-red-500'><MdCancel /></button>
            <button className='text-2xl cursor-pointer'><FaCheckCircle /></button>
          </div>
        </form> :
          <div className="flex items-center gap-5 pr-3">
            <p className='capitalize'>{item.date}</p>
            <CiEdit className='cursor-pointer text-2xl' onClick={handleEditMode2} />
          </div>}
      </div>

      <div className="flex items-center justify-between font-bold text-lg ">
        <h4>Time</h4>
        {editTime ? <form className='bg-green-300' onSubmit={handleSubmission}>
          <input type="time" name="time" value={form.time} onChange={handleChange} />
          <div className="flex items-center justify-between my-2 px-2">
            <button type='button' onClick={cancelEdit} className='text-2xl cursor-pointer text-red-500'><MdCancel /></button>
            <button className='text-2xl cursor-pointer'><FaCheckCircle /></button>
          </div>
        </form> :
          <div className="flex items-center gap-5 pr-3">
            <p className='capitalize'>{item.time}</p>
            <CiEdit className='cursor-pointer text-2x ' onClick={handleEditMode3} />
          </div>}

      </div>
      <div className="">
        <input type="checkbox" value={item.id} checked={progress2.includes(item.id)}  onChange={ToggleHandler2} />
      </div>
      <div className="flex itesm-center justify-between mb-2">
        <button className='px-3 py-1 bg-red-500 mb-2 text-xs rounded-md text-white mt-1' onClick={Deletetask2}>Delete Task</button>
        <button onClick={() => Duplicate(item.id)} className='px-2 py-2 bg-green-400 text-white mb-2 rounded-md'>Duplicate</button>
      </div>
    </div>
  </div>
)
}

export default Todo