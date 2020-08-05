import {
    ADD_COMMENT,
    DELETE_CONTACT,
    SET_CURRRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR,
    SET_CURRENT,
    GET_CONTACTS
} from './types';

export default (state, action) => {
    switch(action.type){
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
    }
}