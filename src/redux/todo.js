// import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Todo = (state = {
    isLoading: true,
    errMess: null,
    todo: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return { ...state, isLoading: false, errMess: null, todo:action.payload.todo };

        case ActionTypes.REMOVE_TODO:
            var removeIndex = state.todo.indexOf(action.payload.todo);
            return { ...state, isLoading: false, errMess: null, todo: [...state.todo.slice(0, removeIndex), ...state.todo.slice(removeIndex + 1)] };

        case ActionTypes.EDIT_TODO:
            var editIndex = state.todo.indexOf(action.payload.task);
            action.payload.task.todo = action.payload.todo
            if (editIndex < 0) return { ...state }
            return { ...state, isLoading: false, errMess: null, todo: Object.assign([...state.todo], { [editIndex]: action.payload.task }) }

        case ActionTypes.TODO_FETCH_LOADING:
            return { ...state, isLoading: true, errMess: null, todo: [] }

        default:
            return state;
    }
};
