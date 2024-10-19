import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {
  return (
    <>
    <div className='p-10'>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
    </div>
    </>
  )
}

export default App
