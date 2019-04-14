import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Todo } from "./todo";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            todo: Todo,
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}