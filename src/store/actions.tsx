import axios from 'axios';

import * as actionTypes from './actionTypes';

export const setSearchField = (text: string) => ({
    payload: text,
    type: actionTypes.CHANGE_SEARCH_FIELDS
});

export const requestRobots = (dispatch: (param: any) => void) => {
    dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING });

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(users => {
            dispatch({
                payload: users.data,
                type: actionTypes.REQUEST_ROBOTS_SUCCESS
            });
        })
        .catch(error => {
            dispatch({
                payload: error,
                type: actionTypes.REQUEST_ROBOTS_FAILURE
            });
        });
};