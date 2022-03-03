import {
    CreatePost,
    CreateResponse
} from "../constants";

export const GET_POSTS_BEGIN = 'GET_POST_BEGIN';
export const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS';
export const CREATE_POST_BEGIN = 'CREATE_POST_BEGIN';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const GET_POST_WITH_RESPONSES_BEGIN = 'GET_POST_WITH_RESPONSES_BEGIN';
export const GET_POST_WITH_RESPONSES_SUCCESS = 'GET_POST_WITH_RESPONSES_SUCCESS';
export const CREATE_RESPONSE_BEGIN = 'CREATE_RESPONSE_BEGIN';
export const CREATE_RESPONSE_SUCCESS = 'CREATE_RESPONSE_SUCCESS';

export const get_posts_begin = () => ({
    type: GET_POSTS_BEGIN,
});

export const create_post_begin = (title, author, content) => ({
    type: CREATE_POST_BEGIN,
    payload: new CreatePost({
        title: title,
        author: author,
        content: content
    }),
});

export const get_post_with_responses = (post_id) => ({
    type: GET_POST_WITH_RESPONSES_BEGIN,
    payload: {
        post_id: post_id
    }
});

export const create_response = (post_id, author, message) => ({
    type: CREATE_RESPONSE_BEGIN,
    payload: new CreateResponse({
        post_id: post_id,
        author: author,
        message: message
    }),
});