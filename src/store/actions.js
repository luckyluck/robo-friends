import * as actionTypes from './actionTypes';

export const setSearchField = text => ({
    type: actionTypes.CHANGE_SEARCH_FIELDS,
    payload: text
});