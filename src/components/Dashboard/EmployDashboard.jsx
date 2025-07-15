import React from 'react'
import Header from '../other/Header'
import TaskLIstNumber from '../other/TaskLIstNumber'
import TaskList from '../TaskList/TaskList'
function EmployDashboard(props) {
  return (
    <div>
      <div className='p-10 h-screen text-zinc-100 bg-[#1c1c1c]'> 
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskLIstNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployDashboard
