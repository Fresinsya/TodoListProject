import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../redux/reducers/Todo-counter'
import ListTodo from './ListTodo'

const InputTodo = () => {
    const { todos, isEdit } = useSelector((state) => state.todos)
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            dispatch(updateTodo(input))
        } else {
            dispatch(addTodo(input))
        }
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
                    className='border-2 items-center justify-center border-gray-400 rounded-xl p-2 m-3' />
                <button type='submit' className='p-3 rounded-2xl h-12' onClick={handleSubmit} style={{ backgroundColor: '#113946', color: 'white' }}>{isEdit ? "edit" : "add"}</button>

            </div>
            <ListTodo setInput={setInput} />
        </div>

    )
}

export default InputTodo