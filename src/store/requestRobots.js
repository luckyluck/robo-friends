import * as actionTypes from './actionTypes';

const initialState = {
    robots: [],
    error: null,
    isPending: false
};

export const requestRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.REQUEST_ROBOTS_PENDING: {
            return {
                ...state,
                isPending: true,
                error: null
            };
        }
        case actionTypes.REQUEST_ROBOTS_SUCCESS: {
            return {
                ...state,
                robots: action.payload,
                isPending: false,
                error: null
            };
        }
        case actionTypes.REQUEST_ROBOTS_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isPending: false
            };
        }
        default:
            return state;
    }
};