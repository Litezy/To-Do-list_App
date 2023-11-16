import React, {  useState } from 'react'
import Todo from './components/Todo'


const App = () => {
  const [todoList, setTodoList] = useState([])
  const [done, setDone] = useState([])
  const [selectedtask, setSelectedtask] = useState(null)
  const [forms, setForms] = useState({
    id:'',
    taskName:''
  })


  const updatevalue = (event) => {
   setForms({...forms,
    taskName: event.target.value})
  }

  const handleclick = (e) => {
    e.preventDefault()
    if (forms.taskName) {
      const dateget = new Date()
      const dateData = dateget.getTime()
      const tasks = {
        id: dateData,
        taskName: forms.taskName
      }
      setTodoList((prev) => [tasks, ...prev]);
      setForms({
        id:'',
        taskName:''
      })
    }
    else {
      alert('Please input a valid task')
    }

  }
  const handleMove = (task) => {
    if (task === selectedtask) {
      setSelectedtask(null);
      setActive(false)
  }
   setTodoList((prev) => prev.filter((item) => item.id !== task.id))
   setDone((prev) => [task, ...prev])
   
  }
  const returnMove = (task) => {
   setDone((prev) => prev.filter((item) => item.id !== task.id))
   setTodoList((prev) => [task, ...prev])
   
   
  }
 


  return (
    <div>
      <div className="pt-10 text-5xl text-black font-bold header   text-center">To-Do List Memo</div>
      <p className='shadow-xl text-black font-bold text-xl text-center mt-5'>A simple to-do list app</p>
      <div className="flex flex-col items-center justify-between w-[80%] mx-auto my-10 ">
        <div className="add-task w-[50%]">
          <form onSubmit={handleclick}>
            <div className="flex flex-col items-center justify-between w-[100%] gap-10  ">
              <input onChange={updatevalue} placeholder='Add task here' value={forms.taskName} type="text" className='border-2 text-lg font-semibold border-black w-[90%] md:w-11/12 py-3 outline-none px-3' />
              <button className='text-2xl text-white font-bold px-5 py-3 rounded-md bg-blue-400 '>Add ToDo</button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:flex w-[100%] items-center grid grid-cols-1 justify-between gap-20 px-5 my-10 ">
        <div className="list md:w-[40%] w-[100%] self-start   border-2 ">
          <div className=" text-center font-bold text-3xl ">Undone Lists</div>
          {todoList.map((task, i) => (
            <Todo
              key={i}
            task={task}
            handleMove={() => handleMove(task)}
            isDone={false}
            color={'green'}
            setSelectedtask={setSelectedtask}
            selectedtask={selectedtask}
            />
            
          ))}
        </div>
        <div className="md:w-[40%] w-[100%] self-start border-4">
          <div className="text-center font-bold text-3xl">Done Lists</div>
          {done.map((task, i) =>(
           <Todo key={i} task={task}
           handleMove={() =>returnMove(task)}
           isDone={true}
           color={'red'}
           setSelectedtask={setSelectedtask}
           selectedtask={selectedtask}
           />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App