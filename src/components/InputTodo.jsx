import React from 'react'

const InputTodo = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold '>Todo List</h1>
            <input type="text" placeholder='Tambahkan Todo'
                className='border-2 items-center justify-center border-gray-400 rounded-xl p-2 m-3'
            ></input>
            <button type='submit' className='p-3 rounded-2xl' style={{backgroundColor: '#113946', color: 'white'}}>add</button>
        </div>
    )
}

export default InputTodo