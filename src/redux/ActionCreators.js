import * as ActionTypes from './ActionTypes';

export const addTodo = (todo) => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        todo: todo,
    }
});

export const removeTodo = (todo) => ({
    type: ActionTypes.REMOVE_TODO,
    payload: {
        todo: todo
    }
});

export const editTodo = (task,todo) => ({
    type: ActionTypes.EDIT_TODO,
    payload: {
        todo: todo,
        task: task
    }
});