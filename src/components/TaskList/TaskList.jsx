import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  console.log(data)
  return (
    <div id='taskList' className='h-[55%] no-scrollbar w-full  flex gap-5 flex-nowrap overflow-scroll scrollbar-none p-5 mt-5'>
      
      {data.tasks.map((task,index)=>{

        if(task.active){
          return <AcceptTask key={index} data={task} />
        }
        if(task.completed){
          return <CompleteTask key={index} data={task} />
        }
        if(task.newTask){
          return <NewTask key={index} data={task} />
        }
        if(task.failed){
          return <FailedTask key={index} data={task} />
        }
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
     
    </div>
  )
}

export default TaskList
