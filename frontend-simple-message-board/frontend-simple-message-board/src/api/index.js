import axios from "axios";

const base_url = new URL(process.env.REACT_APP_API_HOST || "http://localhost:8080");

export async function get_posts() {
    const url = new URL(base_url);
    url.pathname = "/posts";
    return axios({
        method: 'get',
        url: url.href,
    }).then(res => res);
}

export async function get_responses(post_id) {
    const url = new URL(base_url);
    url.pathname = `/responses/${post_id}`;
    return axios({
        method: 'get',
        url: url.href,
    }).then(res => res);
}

export async function create_post(create_post) {
    const url = new URL(base_url);
    url.pathname = "/posts";
    const data = {
        ...create_post,
    };
    return axios({
        method: 'post',
        url: url.href,
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
    url.pathname = `/responses/${create_response.post_id}`;
    const data = {
        ...create_response,
    };
    return axios({
        method: 'post',
        url: url.href,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    });
}