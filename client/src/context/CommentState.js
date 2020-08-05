import React, {useReducer} from 'react';
import {v4 as uuid} from "uuid"; 
import CommentContext from './commentContext';
import commentReducer from './commentReducer';
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
    GET_COMMENTS
} from './types';

const CommentState = props => {
    const initialState = {
        comments: [
            {id: 1, userComment:'hate Joburg!!!'},
            {id: 2, userComment:'weather in cape town so cold!!'},
            {id: 3, userComment:'visited PE last year, cant wait to visit again...'}
        ],
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(commentReducer, initialState);

    
    //ADD CONTACT
    const Post = comment => {
        comment.id = uuid();
        dispatch({type: ADD_COMMENT, payload: comment})
    }
    
    return (
        <CommentContext.Provider
            value ={{
                comments: state.comments, Post,
                current: state.current,
                filtered: state.filtered,
                error: state.error,  
            }}
            >
            {props.children}
        </CommentContext.Provider>
    )
}

export default CommentState;