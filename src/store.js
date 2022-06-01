import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./services/reducers/TodosReducer";


const store = createStore(todosReducer, applyMiddleware(thunk))

export default store