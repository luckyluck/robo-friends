import { IAction } from '../interfaces/action.interface';
import * as actionTypes from './actionTypes';

const initialState = {
    searchField: ''
};

export const searchRobots = (state = initialState, action = {} as IAction) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_FIELDS: {
            return {
                ...state,
                searchField: action.payload
            };
        }
        default:
            return state;
    }
};