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
                const response = yield call(() => api.get_posts());
                const data = response.data;
                yield put(get_posts_success(data));
            } catch (e) {
                console.warn(e);
            };
            return;
        default:
            return;
    }
}


const create_post_success = data => ({
    type: actions.CREATE_POST_SUCCESS,
    payload: data,
});

function* create_post(action) {
    switch (action.type) {
        case actions.CREATE_POST_BEGIN:
            try {
                const response = yield call(() => api.create_post(action.payload));
                const data = response.data;
                yield put(create_post_success(data));
            } catch (e) {
                console.log(e);
            };
            return;
        default:
            return;
    }
}

function* postSaga() {
    yield takeEvery(actions.GET_POSTS_BEGIN, get_posts);
    yield takeEvery(actions.CREATE_POST_BEGIN, create_post);
}

const create_response_success = data => ({
    type: actions.CREATE_RESPONSE_SUCCESS,
    payload: data,
});

function* create_response(action) {
    switch (action.type) {
        case actions.CREATE_RESPONSE_BEGIN:
            try {
                console.log(action.payload)
                const response = yield call(() => api.create_response(action.payload));
                const data = response.data;
                yield put(create_response_success(data));
            } catch (e) {
                console.log(e);
            };
            return;
        default:
            return;
    }
}

const get_post_with_responses_success = data => ({
    type: actions.GET_POST_WITH_RESPONSES_SUCCESS,
    payload: data,
});

function* get_post_with_responses(action) {
    switch (action.type) {
        case actions.GET_POST_WITH_RESPONSES_BEGIN:
            try {
                const response = yield call(() => api.get_responses(action.payload.post_id));
                const data = response.data;
                yield put(get_post_with_responses_success(data));
            } catch (e) {
                console.warn(e);
            };
            return;
        default:
            return;
    }
}


function* responseSaga() {
    yield takeEvery(actions.CREATE_RESPONSE_BEGIN, create_response);
    yield takeEvery(actions.GET_POST_WITH_RESPONSES_BEGIN, get_post_with_responses);
}

export default function* rootSaga() {
    yield all([postSaga(), responseSaga()]);
}