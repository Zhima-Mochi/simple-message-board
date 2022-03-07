import axios from "axios";

const base_url = new URL("http://localhost/");
base_url.pathname = process.env.REACT_APP_API;

export async function get_posts() {
    const url = new URL(base_url);
    url.pathname += "/posts";
    return axios({
        method: 'get',
        url: url.pathname + url.search,
    }).then(res => res);
}

export async function get_responses(post_id) {
    const url = new URL(base_url);
    url.pathname += `/responses/${post_id}`;
    return axios({
        method: 'get',
        url: url.pathname + url.search,
    }).then(res => res);
}

export async function create_post(create_post) {
    const url = new URL(base_url);
    url.pathname += "/posts";
    const data = {
        ...create_post,
    };
    return axios({
        method: 'post',
        url: url.pathname + url.search,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    });
}

export async function create_response(create_response) {
    const url = new URL(base_url);
    url.pathname += `/responses/${create_response.post_id}`;
    const data = {
        ...create_response,
    };
    return axios({
        method: 'post',
        url: url.pathname + url.search,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    });
}