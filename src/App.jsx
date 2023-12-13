
// Import React hooks and components
import React, {useEffect, useState}from 'react' 
import FormComponent from './components/FormComponent'
import Todo from './components/Todo'
import Notify from './components/Notify'
import SecondTodo from './components/SecondTodo'
import Secondbutton from './components/Secondbutton'
import Firstbutton from './components/Firstbutton'

// Export a constant to store local storage key 
export const localName = 'task'

// Main App component
const App = () => {

  
  const [status, setStatus] = useState(false)
  const [name, setName] = useState('Select All')
  const [status2, setStatus2] = useState(false)
  const localStore = JSON.parse(localStorage.getItem(localName))
  const [list, setList] = useState(localStore || [])
  const [finallist, setFinalList] = useState([])
  const [progress, setProgress] = useState([])
  const [progress2, setProgress2] = useState([])
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [message, setMessage] =useState({
    text:'',
    color:'',
    status:false
  })


  // State for form data
  const [forms, setForms] = useState({
    title: '',
    date: '',
    time: '',  
})

// Initialize localStorage if empty
useEffect(()=>{
  if(!localStore){
    localStorage.setItem(localName, JSON.stringify([]))
  }
},[])

// Function to update notification message
const updateMessage = (text, color, status) => {
  setMessage({
    text, 
    color,
    status
  })
}

const time = () => {
  if (message.status) {
    setMessage({
      ...message,
      status: false
    })
  }}

setTimeout(time, 2000)



// const ToggleHandler = (e) => {
//   let isChecked = e.target.checked
//   let value =  parseInt(e.target.value)
  
//   if(isChecked){
//     setStatus(true)
//    setProgress([ value, ...progress])
  
//   }
//   else{
//    setProgress((prev) => { return prev.filter((id) => id !== value)})
//    setStatus(status? false :true)
//    setName('Select All')
//   }
 
  
 
// }
// const ToggleHandler2 = (e) => {
//   let isChecked = e.target.checked
//   let value =  parseInt(e.target.value)
  
//   if(isChecked){
//     setStatus2(true)
//    setProgress([ value, ...progress])
//   }
//   else{
//    setProgress((prev) => {
//      return prev.filter((id) => id !== value)
//    })
//    setStatus2((prev) => !prev)
//   }
 
// }
const ToggleHandler = (e) => {
  let isChecked = e.target.checked;
  let value = parseInt(e.target.value);

  if (isChecked) {
    setProgress((prev) => [value, ...prev]);
    setStatus(true)
  } else {
    setProgress((prev) => prev.filter((id) => id !== value));
  }

};

useEffect(()=> {
  if(progress.length > 0){
    setStatus(true)
  }
  else{
    setStatus(false)
  }
}, [progress])
useEffect(()=> {
  if(progress2.length > 0){
    setStatus2(true)
  }
  else{
    setStatus2(false)
  }
}, [progress2])

const ToggleHandler2 = (e) => {
  let isChecked = e.target.checked;
  let value = parseInt(e.target.value);

  if (isChecked) {
    setProgress2((prev) => [value, ...prev]);
  } else {
    setProgress2((prev) => prev.filter((id) => id !== value));
  }

};

// Update a todo item 
const handleEdit = (id, newvalues) => {
  const index = list.findIndex(item => item.id === id)
  const newList = [...list]
  newList[index] = newvalues
  setList(newList)
}
const handleEdit2 = (id, newvalues) => {
  const index = finallist.findIndex(item => item.id === id)
  const newList = [...list]
  newList[index] = newvalues
  setFinalList(newList)
}

// Select all todos
const selectAllUncomplete = (e) =>{
  setChecked(e.target.checked)
  const finder = list.map((item) =>{
    return item.id
    
  })
  setProgress(finder)
  setStatus(true)
  setName('Unselect All')
  if(list.length === progress.length){
    setProgress([])
    setStatus(false)
    setName('Select All')
    
  }
}

const selectAllDone = (e) =>{
  setChecked2(e.target.checked)
  const finder = finallist.map((item) =>{
    return item.id
  })
  setProgress2(finder)
  setStatus2(true)
  setName('Unselect All')
  if(finallist.length === progress.length){
    setProgress2([])
    setStatus2(false)
    setName('Select All')
  }

}
const moveItem = () => {
  const selected = progress.filter(id => status);
  const remaining = list.filter(item => !selected.includes(item.id));
  setFinalList([...finallist, ...list.filter(item => selected.includes(item.id))]);
  setList(remaining)
  setProgress([])
  setName("Select All")
  setChecked(false)
  setStatus(false)
}
const moveback= () => {
 const selected = progress2.filter(id => status2);
  const remaining = finallist.filter(item => !selected.includes(item.id));
  setList([...list, ...finallist.filter(item => selected.includes(item.id))]);
  setFinalList(remaining)
  setProgress2([])
  setName("Select All")
  setChecked2(false)
  setStatus2(false)

}


// Delete a todo item
const Deletetask = (id) => {
  const localdata = JSON.parse(localStorage.getItem(localName))
  const findByIndex = localdata.find((item) => item.id === id)
  if(findByIndex){
    const filteredData = localdata.filter((item) => item.id !== id)
    localStorage.setItem(localName, JSON.stringify(filteredData))
    setList(filteredData)
    updateMessage('Task deleted successfully', 'green', true)
  }
}
const Deletetask2 = (id) => {
  const localdata = JSON.parse(localStorage.getItem(localName))
  const filteredData = localdata.filter((item) => item.id !== id)
 const findByIndex = localdata.find((item) => item.id === id)
if(findByIndex){
  localStorage.setItem(localName, JSON.stringify(filteredData))
    const filterTask = finallist.filter((item) => item.id !== id)
    setFinalList( filterTask)
    updateMessage('Task deleted successfully', 'green', true)
}
}

  return (
    <div className='w-full relative'>
     {message.status &&  <Notify
      color={message.color}
      text={message.text}
      closeView={() => setMessage({...message, status:false})}/>}
      <div className="w-[90%] mx-auto  ">
      <div className="text-xl md:text-3xl w-full md:w-[100%] text-center pt-10 font-bold text-purple-500">A Simple To-do list Application</div>
      <FormComponent
      forms={forms}
      list={list}
      setList={setList}
      setForms={setForms}
      setFinalList={setFinalList}
      updateMessage={updateMessage}
    />
      <div className="mt-5 ml-10">
      </div>
      </div>
      <div className="grid md:flex md:items-center md:justify-evenly md:gap-10 w-[80%] mx-auto my-10  ">
        <div className="w-full md:w-[50%] mx-auto self-start   my-10 md:my-0  ">
         <input type="checkbox" checked={checked}  onChange={selectAllUncomplete} /> <span className='pl-2 font-semibold text-lg'>{name}</span> 
          <div className="font-bold text-center text-2xl text-purple-400 ">Uncompleted Lists</div>
         {Array.isArray(list) &&  list.map((item,index) => (
           <Todo 
            item={item}
            key={index}
            showButton={() => showButton(item.id) }
            handleEdit={handleEdit}
            Deletetask={() =>Deletetask (item.id)}
            setList={setList}
            list={list}
            ToggleHandler={ToggleHandler}
            checked={checked}
            setChecked={setChecked}
            progress={progress}
            setProgress={setProgress}
            updateMessage={updateMessage}
            />
          ))}
           
        </div>
        <div className="">
        {status ? <Firstbutton
        status={status}
        moveSelected={ moveItem}
        />: ''}
      </div>
        {status2 && <Secondbutton
        status2={status2}
        moveback={moveback}/>}
        <div className="w-full md:w-[50%] mx-auto self-start ">
        <input className=' cursor-pointer' type="checkbox" checked={checked2} onChange={selectAllDone} /> <span className='pl-2 font-semibold text-lg'>{name}</span>
        <div className="font-bold text-center text-2xl text-purple-400  w-full">Completed Lists</div>
        {Array.isArray(finallist) &&  finallist.map((item,index) => (
           <SecondTodo 
           item={item}
           key={index}
           handleEdit2={handleEdit2}
           Deletetask2={() =>Deletetask2 (item.id)}
           setFinalList={setFinalList}
           finallist={finallist}
           ToggleHandler2={ToggleHandler2}
           checked={checked}
           setChecked={setChecked}
           progress2={progress2}
           updateMessage={updateMessage}
            />
          ))}
      </div>
      </div>
    </div>
  )
}

export default App


