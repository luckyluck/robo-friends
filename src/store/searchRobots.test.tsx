import * as actionTypes from './actionTypes';
import { searchRobots } from './searchRobots';

describe('searchRobots reducer', () => {
    const initialState = { searchField: '' };

    it('should return the initial state', () => {
        expect(searchRobots(initialState)).toEqual(initialState);
    });

    it('should return state if there is no such action', () => {
        expect(searchRobots(initialState, {
            payload: 'Some data',
            type: 'UNKNOWN_ACTION'
        })).toEqual(initialState);
    });

    it('should hadnle CHANGE_SEARCH_FIELDS action', () => {
        expect(searchRobots(initialState, {
            payload: 'abc',
            type: actionTypes.CHANGE_SEARCH_FIELDS
        })).toEqual({ searchField: 'abc' });
    });
});