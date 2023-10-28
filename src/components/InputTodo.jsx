import React from 'react'

const InputTodo = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold '>Todo List</h1>
            <div className='flex justify-center items-center'>
                <input type="text" placeholder='Tambahkan Todo'
                    className='border-2 items-center justify-center border-gray-400 rounded-xl p-2 m-3'/>
                <button type='submit' className='p-3 rounded-2xl h-12' style={{ backgroundColor: '#113946', color: 'white' }}>add</button>

            </div>
        </div>
    )
}

export default InputTodo