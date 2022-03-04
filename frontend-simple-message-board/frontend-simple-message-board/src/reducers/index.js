import * as actions from '../actions';
import {
    combineReducers
} from 'redux';
import {
    DataPost
} from '../constants';

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

const responsesReducer = (state = new DataPost({}), action) => {
    switch (action.type) {
        case actions.GET_POST_WITH_RESPONSES_SUCCESS:
            return action.payload;
        case actions.CREATE_RESPONSE_SUCCESS:
            window.location.href = `/posts/${action.payload.post_id}`;
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    postsReducer: postsReducer,
    responsesReducer: responsesReducer
});

export default rootReducer;