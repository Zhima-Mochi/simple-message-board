import axios from "axios";

const base_url = new URL("http://localhost:8080");

export async function get_posts() {
    const url = new URL(base_url);
    url.pathname = "/posts";
    return axios({
        method: 'get',
        url: url.href,
    }).then(res => res).catch(e => console.warn(e));
}

export async function create_post(post) {
    const url = new URL(base_url);
    url.pathname = "/posts";
    const data = {
        ...post,
    };
    return axios({
        method: 'post',
        url: url.href,
        data: data,
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res).catch(e => console.log(e));
}