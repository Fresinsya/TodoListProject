import React from 'react'
import InputTodo from '../components/InputTodo'
import ListTodo from '../components/ListTodo'

const Home = () => {
  return (
    <div style={{backgroundColor: '#FFF2D8'}} className='h-screen'>
        <InputTodo />
        <ListTodo />
    </div>
  )
}

export default Home