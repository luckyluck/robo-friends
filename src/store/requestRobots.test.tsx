import * as actionTypes from './actionTypes';
import { requestRobots } from './requestRobots';

describe('requestRobots reducer', () => {
    const initialState = {
        error: null,
        isPending: false,
        robots: []
    };

    it('should return the initial state', () => {
        expect(requestRobots(initialState)).toEqual(initialState);
    });

    it('should return state if there is no such action', () => {
        expect(requestRobots(initialState, {
            payload: 'Some data',
            type: 'UNKNOWN_ACTION'
        })).toEqual(initialState);
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(requestRobots(initialState, {
            type: actionTypes.REQUEST_ROBOTS_PENDING
        })).toEqual({
            ...initialState,
            error: null,
            isPending: true
        });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        const robots = [{
            email: 'john@gmail.com',
            id: 1,
            name: 'John'
        }];

        expect(requestRobots(initialState, {
            payload: robots,
            type: actionTypes.REQUEST_ROBOTS_SUCCESS
        })).toEqual({
            ...initialState,
            error: null,
            isPending: false,
            robots
        });
    });

    it('should handle REQUEST_ROBOTS_FAILURE action', () => {
        const error = 'Some specific error';

        expect(requestRobots(initialState, {
            payload: error,
            type: actionTypes.REQUEST_ROBOTS_FAILURE
        })).toEqual({
            ...initialState,
            error,
            isPending: false
        });
    });
});