import React from 'react'

const ListTodo = () => {
    return (
        <div className='flex justify-center items-center w-full'>

            <div style={{ backgroundColor: '#BCA37F', width: 300 }} className='flex justify-center item-center'>
                <div className='flex justify-center items-center gap-3 my-3'>
                    <input type="checkbox" className=''></input>
                    <span>Belajar react</span>
                    <button className='btn border-2 p-2 rounded-xl'>edit</button>
                    <button className='btn border-2 p-2 rounded-xl'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default ListTodo