import React from 'react'

function TaskLIstNumber({data}) {
  return (
    <div className='flex justify-between gap-5 mt-5'>
      <div className=' p-5 w-80 rounded-2xl bg-red-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className=' p-5 w-80 rounded-2xl bg-yellow-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-2xl font-medium'>Active Task</h3>
      </div>
      <div className=' p-5 w-80 rounded-2xl bg-green-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className=' p-5 w-80 rounded-2xl bg-blue-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
      
    </div>
  )
}

export default TaskLIstNumber
