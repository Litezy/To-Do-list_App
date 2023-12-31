import React, { useState } from 'react'
import { localName } from '../App'

const FormComponent = ({ forms, setForms, updateMessage, setList, setFinalList }) => {

    const handleChange = (event) => {
        setForms({ ...forms, [event.target.name]: event.target.value })
    }

    const [checked, setChecked] = useState(false);
    const handleCheck = (e) => {
        setChecked(e.target.checked);
    }

    const handleTime = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        let timerChange = document.querySelector('#timeInput')
        let currentdate = new Date()
        let hours = currentdate.getHours()
        let minutes = currentdate.getMinutes()
        // let seconds = currentdate.seconds()
        let meridian = currentdate.toLocaleTimeString()
        let finaltime = `${hours} : ${minutes} ${meridian}`
        timerChange.innerHTML = finaltime
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (!forms.title) return updateMessage('Task title is required', 'red', true)
        if (!forms.date) return updateMessage('Date is required', 'red', true)
        if (!forms.time) return updateMessage('Time is required', 'red', true)

        const currentData = JSON.parse(localStorage.getItem(localName))
        const dateId = new Date().getTime()
        const tasks = {
            title: forms.title,
            date: forms.date,
            time: forms.time,
            id: dateId,
            selecteditem: false
        }
        if (checked) {
            setFinalList((prev) => [...prev, tasks]);
            setChecked(false)
        } else {
            setList((prev) => [...prev, tasks]);
        }
        updateMessage('Task Added Successfully', 'green', true)

        currentData.push(tasks)
        localStorage.setItem(localName, JSON.stringify(currentData))
        setForms({
            title: '',
            date: '',
            time: ''
        })


    }
    return (
        <div>
            <div className=" w-full mx-auto">
                <form onSubmit={handleSubmit} className='w-[70%] mx-auto' >
                    <div className=" md:w-full">
                        <div className="grid item-center gap-5 md:gap-10 md:flex">
                            <input className='border-2 md:w-2/4 md:py-2 pl-2 mt-3 w-[100%] h-12' type="text" name="title" placeholder="Task title" value={forms.title} onChange={handleChange} />
                            <div className="flex  items-center gap-5 hidden show">
                                <input className='pl-10' type="checkbox" checked={checked} onChange={handleCheck} />
                                <h3>click to move to done</h3>
                            </div>
                        </div>
                        <input className='border-2 md:w-2/4 py-2 pl-2 mt-3 w-full ' type="date" name="date" value={forms.date} onChange={handleChange} /><br />
                        <input className='border-2 md:w-2/4 py-2 pl-2 mt-3 w-full' type="time" name="time" value={forms.time} onChange={handleTime} id='timeInput' /><br />
                        <div className="flex  items-center gap-5 mt-2 md:hidden">
                            <input className='pl-10' type="checkbox" checked={checked} onChange={handleCheck} />
                            <h3>click to move to done</h3>
                        </div>
                        <button className='ml-auto px-10 text-white py-3 rounded-md mt-5 bg-purple-500'>Add Task</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormComponent