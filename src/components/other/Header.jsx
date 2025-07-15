import React from 'react'

function Header(props) {
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div>
      <div className=' flex justify-between items-start'>
        <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-bold'>deepak</span> 👋</h1>
        <button onClick={logOutUser} className='px-4 py-1 font-semibold bg-red-800 rounded-sm'>LogOut</button>
      </div>
    </div>
  )
}

export default Header
