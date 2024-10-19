import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-2/4 w-full flex items-center justify-start gap-5 flex-nowrap  mt-10 rounded-md py-5 overflow-x-auto'>
      
      <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-md p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> Make a Youtube Video </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus dolores dolorem laborum voluptates tempora!</p>
      </div>

      
      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-md p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> Make a Youtube Video </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus dolores dolorem laborum voluptates tempora!</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-md p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> Make a Youtube Video </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus dolores dolorem laborum voluptates tempora!</p>
      </div>

      
      <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-md p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-700 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'> Make a Youtube Video </h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus dolores dolorem laborum voluptates tempora!</p>
      </div>
    </div>
  )
}

export default TaskList
