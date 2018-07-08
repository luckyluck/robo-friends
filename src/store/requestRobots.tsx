import { IAction } from '../interfaces/action.interface';
import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    isPending: false,
    robots: []
};

export const requestRobots = (state = initialState, action = {} as IAction) => {
    switch (action.type) {
        case actionTypes.REQUEST_ROBOTS_PENDING: {
            return {
                ...state,
                error: null,
                isPending: true,
            };
        }
        case actionTypes.REQUEST_ROBOTS_SUCCESS: {
            return {
                ...state,
                error: null,
                isPending: false,
                robots: action.payload
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