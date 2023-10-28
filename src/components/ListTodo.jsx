import React from 'react'

const ListTodo = () => {
  return (
    <div style={{backgroundColor: '#BCA37F'}} className='flex justify-center item-center w-80'>
        <div className='flex items-center gap-3 my-3'>
            <input type="checkbox"></input>
            <span>Belajar react</span>
            <button className='btn border-2 p-2 rounded-xl'>edit</button>
            <button className='btn border-2 p-2 rounded-xl'>delete</button>
        </div>
    </div>
  )
}

export default ListTodo