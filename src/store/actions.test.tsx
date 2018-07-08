// import configureMockStore from 'redux-mock-store';
// import thunkMiddleware from 'redux-thunk';

import * as actions from './actions';
import * as actionTypes from './actionTypes';

describe('actions', () => {
    // const mockStore = configureMockStore([thunkMiddleware]);

    it('should create an action to search robots', () => {
        const text = 'wooo';
        const expectedAction = {
            payload: text,
            type: actionTypes.CHANGE_SEARCH_FIELDS
        };

        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    // it('should handle request of robots API', () => {
    //     const store = mockStore();
    //     store.dispatch(actions.requestRobots());
    //     const action = store.getActions();
    //     const expectedAction = { type: actionTypes.REQUEST_ROBOTS_PENDING };
    //
    //     expect(action[0]).toEqual(expectedAction);
    // });
});