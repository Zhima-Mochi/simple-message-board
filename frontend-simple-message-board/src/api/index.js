import axios from "axios";

const base_url = new URL("http://localhost:8080");

export async function get_posts() {
    const url = new URL(base_url);
    url.pathname = "/posts";
    return axios({
        method: 'get',
        url: url.href,
    }).then(res => res.data).catch(e => console.warn(e));
}