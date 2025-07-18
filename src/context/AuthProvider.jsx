import React, { createContext, useEffect, useState } from 'react'
import { getEmployeeData, setEmployeeData } from '../utils/LocalStorage'
export const  AuthContext=createContext()
const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData,setUserData]=useState(null)
    useEffect(()=>{
        setEmployeeData()
        const {employees}=getEmployeeData()
        setUserData(employees)

    },[])
    
    
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
