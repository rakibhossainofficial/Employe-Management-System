import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin")
      console.log("admin")
    }else if(email == "user@me.com" && password == "123") {
      setUser("employee")
    }else{
      alert("Invalid Credentials")
    }
  }

  const data = useContext(AuthContext)
  
  return (
    <div className='p-10'>
      {!user ? <Login handleLogin={handleLogin} />: ""}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </div>
  )
}

export default App
