import * as actionTypes from './actionTypes';

export const setSearchField = text => ({
    type: actionTypes.CHANGE_SEARCH_FIELDS,
    payload: text
});

export const requestRobots = dispatch => {
    dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            dispatch({
                type: actionTypes.REQUEST_ROBOTS_SUCCESS,
                payload: users
            });
        })
        .catch(error => {
            dispatch({
                type: actionTypes.REQUEST_ROBOTS_FAILURE,
                payload: error
            });
        });
};