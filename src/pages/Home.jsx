import React from 'react'
import InputTodo from '../components/InputTodo'

const Home = () => {
    return (
        <div style={{ backgroundColor: '#FFF2D8' }} className='h-screen flex justify-center items-center'>
            <div className='border-4 rounded-2xl w-2/5 border-green-950 p-4' style={{backgroundColor: '#EBF3E8'}}>
                <InputTodo />
            </div>
        </div>
    )
}

export default Home