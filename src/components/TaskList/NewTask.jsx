import React from 'react'

function NewTask({data}) {
  return (
    <div>
      <div className='h-full shrink-0 w-[280px] rounded-2xl bg-cyan-500'>
        <div className='flex justify-between items-center  px-2 py-3'>
            <h3 className='px-3 py-0.5 font-semibold bg-red-700 rounded-sm'>{data.category}</h3>
            <h4 className='font-semibold text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 font-semibold text-2xl px-2'>{data.title}</h2>
        <p className='px-2 mt-3 text-sm'>{data.description}</p>
        <div className='flex justify-start w-full p-2 mt-4'>
            <button className='px-4 py-1 font-semibold bg-green-500 rounded-md text-xs'>Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask
