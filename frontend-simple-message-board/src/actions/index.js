import {
    CreatePost
} from "../constants";

export const GET_POSTS_BEGIN = 'GET_POST_BEGIN';
export const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS';
export const CREATE_POST_BEGIN = 'CREATE_POST_BEGIN';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

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