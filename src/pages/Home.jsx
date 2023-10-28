import React from 'react'
import InputTodo from '../components/InputTodo'
import ListTodo from '../components/ListTodo'

const Home = () => {
    return (
        <div style={{ backgroundColor: '#FFF2D8' }} className='h-screen flex justify-center items-center'>
            <div className='border-4 rounded-2xl w-5/6 border-green-700'>
                <InputTodo />
                <ListTodo />
            </div>
        </div>
    )
}

export default Home