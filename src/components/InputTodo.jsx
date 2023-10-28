import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducers/Todo-counter'

const InputTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")

    }

    return (
        <div>
            <h1 className='text-3xl text-center font-bold '>Todo List</h1>
            <div className='flex justify-center items-center'>
                <input 
                type="text" 
                placeholder='Tambahkan Todo'
                value={input}
                onChange={handleAdd}
                    className='border-2 items-center justify-center border-gray-400 rounded-xl p-2 m-3'/>
                <button type='submit' className='p-3 rounded-2xl h-12' onClick={handleSubmit} style={{ backgroundColor: '#113946', color: 'white' }}>add</button>

            </div>
        </div>
    )
}

export default InputTodo