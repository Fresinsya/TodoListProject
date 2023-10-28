const inisialisasiState = {
    todos: [
        { id: 1, value: 'Belajar React', completed: false, isEdit: false },
        { id: 2, value: 'Belajar Redux', completed: false,  isEdit: false },
    ],

}

export default function todoReducer(state = inisialisasiState, action) {
    switch (action.type) {
        case "add" :
            return {
                ...state,
                todos: [...state.todos, { id: state.todos.length + 1, value: action.payload, completed: false, isEdit: false }]
            }

        case "delete" :
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
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
