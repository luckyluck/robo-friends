import * as actionTypes from './actionTypes';
import { requestRobots } from './requestRobots';

describe('requestRobots reducer', () => {
    const initialState = {
        robots: [],
        error: null,
        isPending: false
    };

    it('should return the initial state', () => {
        expect(requestRobots(initialState)).toEqual(initialState);
    });

    it('should return state if there is no such action', () => {
        expect(requestRobots(initialState, {
            type: 'UNKNOWN_ACTION',
            payload: 'Some data'
        })).toEqual(initialState);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(requestRobots(initialState, {
            type: actionTypes.REQUEST_ROBOTS_PENDING
        })).toEqual({
            ...initialState,
            isPending: true,
            error: null
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        const robots = [{
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        }];

        expect(requestRobots(initialState, {
            type: actionTypes.REQUEST_ROBOTS_SUCCESS,
            payload: robots
        })).toEqual({
            ...initialState,
            isPending: false,
            error: null,
            robots
        });
    });

    it('should handle REQUEST_ROBOTS_FAILURE action', () => {
        const error = 'Some specific error';

        expect(requestRobots(initialState, {
            type: actionTypes.REQUEST_ROBOTS_FAILURE,
            payload: error
        })).toEqual({
            ...initialState,
            isPending: false,
            error
        });
    });
});