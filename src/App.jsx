
import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getEmployeeData, setEmployeeData } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {


  const [user,setUser]=useState(null)
  const [loggedInUser,setLoggedInUser]=useState(null)
  const [userData,setUserData]=useContext(AuthContext);


  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData=JSON.parse((loggedInUser));
      // console.log(userData)
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  },[])


 const handleLogin=(email,password)=>{
  if(email==='admin@example.com' && password==='123'){
    setUser('admin');
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
  }
  else if(userData){
    const employee=userData.find((e)=>email===e.email && password===e.password);
    if(employee){

      setUser('employee');
      setLoggedInUser(employee);
    }
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
  }  
  else{
    
  }
  
 }

 
  return (
    
    <div>
      {!user?<Login handleLogin={handleLogin} />:''}

      {user==='admin'?<AdminDashboard changeUser={setUser} />:user==='employee'?<EmployDashboard changeUser={setUser} data={loggedInUser} />:''}
      {/* <EmployDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
