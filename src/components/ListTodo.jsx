import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo, filterActive, filterAll, filterCompleted, selesai } from '../redux/reducers/Todo-counter'

const ListTodo = ({ setInput }) => {
    const { todos, namaFilter, hasilFilter } = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
        if (namaFilter == "all") {
            dispatch(filterAll())
        } else if (namaFilter == "completed") {
            dispatch(filterCompleted())
        } else if (namaFilter == "active") {
            dispatch(filterActive())
        }
    }
    const handleEdit = (text, id) => {
        setInput(text)
        dispatch(editTodo(id))
        if (namaFilter == "all") {
            dispatch(filterAll())
        } else if (namaFilter == "completed") {
            dispatch(filterCompleted())
        } else if (namaFilter == "active") {
            dispatch(filterActive())
        }
    }
    const handleCheck = (id) => {
        dispatch(selesai(id))
        if (namaFilter == "all") {
            dispatch(filterAll())
        } else if (namaFilter == "completed") {
            dispatch(filterCompleted())
        } else if (namaFilter == "active") {
            dispatch(filterActive())
        }
    }
    const handleFilterAll = () => {
        dispatch(filterAll())
    }
    const handleFilterComplate = () => {
        dispatch(filterCompleted())
    }
    const handleFilterActive = () => {
        dispatch(filterActive())
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <span className='border border-green-950 bg-green-800 text-white p-2 rounded-xl m-2 cursor-pointer hover:bg-green-950 ' onClick={() => handleFilterAll()}>All</span>
                <span className='border border-green-950 bg-green-800 text-white p-2 rounded-xl m-2 cursor-pointer hover:bg-green-950 ' onClick={() => handleFilterComplate()}>Complate</span>
                <span className='border border-green-950 bg-green-800 text-white p-2 rounded-xl m-2 cursor-pointer hover:bg-green-950 ' onClick={() => handleFilterActive()}>Active</span>
            </div>
            <div className='flex flex-col gap-3 m-4'>

                {namaFilter == "all" ? todos.length > 0 ? todos.map((item, index) => {
                    return (


                        <div className='flex justify-center items-center w-full' key={item.id}>

                            <div style={{ backgroundColor: '#4F6F52', width: 300 }} className='flex justify-center item-center rounded-2xl'>
                                <div className='flex justify-center items-center gap-3 my-3'>
                                    <input type="checkbox" className='' checked={item.completed ? true : false} onChange={() => handleCheck(item.id)}></input>
                                    <span className={`${item.completed ? 'line-through' : ""} `} style={{ color: 'white' }}>{item.value}</span>
                                    <div className='flex gap-3'>
                                        <button className='btn border-2 p-2 rounded-xl' style={{ color: 'white' }} onClick={() => handleEdit(item.value, item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </button>
                                        <button className='btn border-2 p-2 rounded-xl' style={{ color: 'white' }} onClick={() => handleDelete(item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }) :
                    <div className='flex justify-center items-center'>
                        <h1>Data Kosong</h1>
                    </div>
                    : hasilFilter.length > 0 ? hasilFilter.map((item, index) => {
                        if (hasilFilter.length > 0) {
                            return (
                                <div className='flex justify-center items-center w-full' key={item.id}>

                                    <div style={{ backgroundColor: '#4F6F52', width: 300 }} className='flex justify-center item-center rounded-2xl'>
                                        <div className='flex justify-center items-center gap-3 my-3'>
                                            <input type="checkbox" className='' checked={item.completed ? true : false} onChange={() => handleCheck(item.id)}></input>
                                            <span className={`${item.completed ? 'line-through' : ""} `} style={{ color: 'white' }}>{item.value}</span>
                                            <div className='flex gap-3'>
                                                <button className='btn border-2 p-2 rounded-xl' style={{ color: 'white' }} onClick={() => handleEdit(item.value, item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                                </button>
                                                <button className='btn border-2 p-2 rounded-xl' style={{ color: 'white' }} onClick={() => handleDelete(item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        <div className='flex justify-center items-center'>
                            <h1>Data Kosong</h1>
                        </div>
                    }) :
                        <div className='flex justify-center items-center'>
                            <h1>Data Kosong</h1>
                        </div>
                }
            </div>
        </>
    )
}

export default ListTodo