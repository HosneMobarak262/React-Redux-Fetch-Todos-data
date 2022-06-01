import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SECCESS } from "../constants/TodosConstants";

const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SECCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                error: action.payload,
                todos: [],
                isLoading: false
            }
        default:
            return state
    }
}