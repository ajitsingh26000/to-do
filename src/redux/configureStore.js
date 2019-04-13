import { createStore, combineReducers } from 'redux';
import { Todo } from "./todo"

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            todo: Todo,
        })
    );

    return store;
}