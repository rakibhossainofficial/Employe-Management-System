import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className='h-screen'>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard
