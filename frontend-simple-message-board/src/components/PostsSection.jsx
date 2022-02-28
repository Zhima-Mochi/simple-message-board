import Post from "./Post";
import { useSelector } from "react-redux";
import { DataPost } from "../constants";

export default function PostsSection() {
    const posts=useSelector(state=>state.postsReducer);
    console.log(posts);
    return (
            posts.map(data_post=><Post key={data_post.id} data_post={new DataPost(data_post)}/>)
    );
}