import * as actionTypes from './actionTypes';

const initialState = {
    searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
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