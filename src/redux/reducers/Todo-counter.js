const inisialisasiState = {
    todos: [
        { id: 1, value: 'Belajar React', completed: false, isEdit: false },
        { id: 2, value: 'Belajar Redux', completed: true, isEdit: false },
    ],
    isEdit: false,
    namaFilter: 'all',
    hasilFilter: [],

}

export default function todoReducer(state = inisialisasiState, action) {
    switch (action.type) {
        case "add":
            return {
                ...state,
                todos: [...state.todos, { id: state.todos.length + 1, value: action.payload, completed: false, isEdit: false }]
            }

        case "delete":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case "edit":
            return {
                ...state,
                isEdit: action.payload

            }
        case "update":
            const newTodos = state.todos.map(list => {
                if (list.id == state.isEdit) {
                    return {
                        ...list,
                        value: action.payload,
                      
                    }
                }
                return list
            })
            return {
                ...state,
                todos: newTodos,
                isEdit: false

            }
        case "checkbox":
            const newTodos2 = state.todos.map(list => {
                if (list.id == action.payload) {
                    return {
                        ...list,
                        completed: !list.completed
                    }
                }
                return list
            })
            return {
                ...state,
                todos: newTodos2,
                isEdit: false

            }
        case "filterAll":
            return {
                ...state,
                namaFilter: action.payload,
                hasilFilter: state.todos,

            }
        case "filterActive":
            return {
                ...state,
                namaFilter: action.payload,
                hasilFilter: state.todos.filter(todo => todo.completed === false)
            }
        
        case "filterCompleted":
            return {
                ...state,
                namaFilter: action.payload,
                hasilFilter:state.todos.filter(todo => todo.completed === true)
            }

        default:
            return state

    }
}

export const addTodo = (value) => {
    return {
        type: 'add',
        payload: value
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'delete',
        payload: id
    }
}

export const editTodo = (id) => {
    return {
        type: 'edit',
        payload: id
    }
}

export const updateTodo = (value) => {
    return {
        type: 'update',
        payload: value
    }
}

export const selesai = (id) => {
    return {
        type: "checkbox",
        payload: id
    }
}

export const filterAll = () => {
    return {
        type: "filterAll",
        payload: "all"
    }
}

export const filterActive = () => {
    return {
        type: "filterActive",
        payload: "active"
    }
}

export const filterCompleted = () => {
    return {
        type: "filterCompleted",
        payload: "completed"
    }
}
