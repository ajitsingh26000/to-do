// import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Todo = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            var todo = action.payload;
            todo.date = new Date().toISOString();
            return state.concat(todo);

        case ActionTypes.REMOVE_TODO:
            var removeIndex = state.indexOf(action.payload.todo);
            return [...state.slice(0, removeIndex), ...state.slice(removeIndex + 1)]

        case ActionTypes.EDIT_TODO:
            var editIndex = state.indexOf(action.payload.task);
            action.payload.task.todo = action.payload.todo
            return Object.assign([...state], { [editIndex]: action.payload.task })

        default:
            return state;
    }
};