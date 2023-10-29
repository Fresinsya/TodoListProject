import React from 'react'
import InputTodo from '../components/InputTodo'

const Home = () => {
    return (
        <div style={{ backgroundColor: '#FFF2D8' }} className='h-screen flex justify-center items-center'>
            <div className='border-4 rounded-2xl w-3/5 border-green-900 p-4'>
                <InputTodo />
            </div>
        </div>
    )
}

export default Home