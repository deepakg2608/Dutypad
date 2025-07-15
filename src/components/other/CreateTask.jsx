import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function CreateTask() {

  const [userData,setUserData]=useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [newTask, setNewTask] = useState({})
  const submitHandler=(e)=>{
    e.preventDefault();

    setNewTask({taskTitle, taskDate, taskCategory, taskDescription, active:true,newTask:true, completed:false, failed:false  })
    
    const data=userData
    console.log(data)
    data.forEach((e)=>{
      if(assignTo===e.firstname){
        e.tasks.push(newTask);
        e.taskCount.newTask=e.taskCount.newTask+1;
      }
    })
    setUserData(data);

    setAssignTo('');
    setTaskDescription('');
    setTaskCategory('');
    setTaskTitle('');
    setTaskDate('');

  }
  return (
    <div>
      <div className="mt-8">
        <form onSubmit={(e)=>submitHandler(e)} className="bg-zinc-800 rounded-md flex justify-between p-8">
          <div className="w-1/2 text-zinc-200">
            <div className="p-2">
              <h3>Task Title</h3>
              <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className="border-2 border-zinc-500 px-2 py-1 outline-none w-[80%] rounded-md" type="text" placeholder="Make a UI Desing." />
            </div>
            <div className="p-2">
              <h3>date</h3>
              <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}} className="border-2 border-zinc-500 px-2 py-1 outline-none w-[80%] rounded-md" type="date" />
            </div>
            <div className="p-2">
              <h3>Assign to</h3>
              <input value={assignTo} onChange={(e)=>{setAssignTo(e.target.value)}} className="border-2 border-zinc-500 px-2 py-1 outline-none w-[80%] rounded-md" type="text" placeholder="Name" />
            </div>
            <div className="p-2">
              <h3>Category</h3>
              <input value={taskCategory} onChange={(e)=>{setTaskCategory(e.target.value)}} className="border-2 border-zinc-500 px-2 py-1 outline-none w-[80%] rounded-md" type="text" placeholder="Game, Dev, etc." />
            </div>
          </div>
          <div className="w-1/2 flex gap-2 flex-col">
            <h3 className="text-md">Description</h3>
            <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}} className="border-2 border-zinc-500 px-2 py-1 outline-none w-full rounded-md" name="" col="30" rows="10" id=""></textarea>

            <button className="bg-green-400 py-1 text-xl hover:bg-green-600 rounded-md font-semibold">Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
