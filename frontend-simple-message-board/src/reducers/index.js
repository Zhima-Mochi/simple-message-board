import * as actions from '../actions';
import {
    combineReducers
} from 'redux';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case actions.GET_POSTS_SUCCESS:
            return [...action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    postsReducer: postsReducer
});

export default rootReducer;