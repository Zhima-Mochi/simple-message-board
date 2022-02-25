import * as actions from '../actions';
import * as api from '../api';
import {
    all
} from 'redux-saga/effects'
import {
    call,
    put,
    takeEvery
} from "@redux-saga/core/effects";
const get_posts_success = data => ({
    type: actions.GET_POSTS_SUCCESS,
    payload: data,
});

function* get_posts(action) {
    switch (action.type) {
        case actions.GET_POSTS_BEGIN:
            try {
                const data = yield call(() => api.get_posts());
                yield put(get_posts_success(data));
            } catch (e) {
                console.warn(e);
            };
            return;
        default:
            return;
    }
}

export default function* rootSaga() {
    yield all([get_posts()]);
}