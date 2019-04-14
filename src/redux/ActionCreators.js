import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addTodo = (todo) => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        todo
    }
});

export const removeTodo = (todo) => ({
    type: ActionTypes.REMOVE_TODO,
    payload: {
        todo: todo
    }
});

export const editTodo = (task, todo) => ({
    type: ActionTypes.EDIT_TODO,
    payload: {
        todo: todo,
        task: task
    }
});

export const todoLoading = () => ({
    type: ActionTypes.TODO_FETCH_LOADING
});

export const fetchTodo = () => (dispatch) => {

    dispatch(todoLoading(true));

    return fetch(baseUrl + 'todo')
        .then(response => response.json())
        .then(todos => dispatch(addTodo(todos)));
}

