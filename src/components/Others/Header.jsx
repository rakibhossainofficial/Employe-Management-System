import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hi <br/> <span className='text-3xl font-semibold'> Rakib👋🏻</span></h1>
        <button className='bg-red-500 px-4 py-3 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header 
