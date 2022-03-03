import * as actions from '../actions';
import {
    combineReducers
} from 'redux';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case actions.GET_POSTS_SUCCESS:
            return [...action.payload];
        case actions.CREATE_POST_SUCCESS:
            window.location.href = "/posts";
            return;
        default:
            return state;
    }
};

const responseReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.GET_POST_WITH_RESPONSES_SUCCESS:
            return action.payload;
        case actions.CREATE_RESPONSE_SUCCESS:
            window.location.href = `/responses/${action.payload.id}`;
            return;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    responseReducer:responseReducer
});

export default rootReducer;