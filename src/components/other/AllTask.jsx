import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
  const [userData,setUserData]=useContext(AuthContext)
  return (
    <div className=' flex gap-4 text-zinc-100 flex-col  mt-7 w-full'>
      <div>
        <div className='bg-red-400  rounded-md flex justify-between p-2'>
            <h2 className='text-md w-1/5 font-semibold'>Employee Name</h2>
            <h3 className='text-md w-1/5 font-semibold'>New Task</h3>
            <h4 className='text-md w-1/5 font-semibold'>Active Task</h4>
            <h4 className='text-md w-1/5 font-semibold'>Completed</h4>
            <h4 className='text-md w-1/5 font-semibold'>Failed</h4>
        </div>
      </div>



    <div className=' flex flex-col gap-2'>
      {userData.map((ele,index) => (<div key={index} className='border-emerald-400 rounded-md border-2 flex w-full justify-between p-2'>
            <h2 className='text-md pl-2 w-1/5 font-semibold'>{ele.firstname}</h2>
            <h3 className='text-md pl-1 w-1/5 whitespace-nowrap text-blue-500 font-semibold'>{ele.taskCount.newTask}</h3>
            <h4 className='text-md pl-2 w-1/5 text-yellow-500 font-semibold'>{ele.taskCount.active}</h4>
            <h4 className='text-md pl-2 w-1/5 text-green-500 font-semibold'>{ele.taskCount.completed}</h4>
            <h4 className='text-md pl-2 w-1/5 text-red-700 font-semibold'>{ele.taskCount.failed}</h4>
        </div>))}
    </div>


        
        
      
    </div>
  )
}

export default AllTask
