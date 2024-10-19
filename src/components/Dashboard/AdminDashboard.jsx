import React from 'react'
import Header from '../Others/Header'
import CreatTask from '../Others/CreatTask';
import AllTask from '../Others/AllTask';


const AdminDashboard = () => {
  return (
    <div className="h-screen w-full">
      {/* header  */}
        <Header />
        <CreatTask /> 
        <AllTask />

    </div>
  );
}

export default AdminDashboard



