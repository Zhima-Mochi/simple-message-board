import Post from "./Post";
import { useSelector } from "react-redux";
import { DataPost } from "../constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useSearchParams } from "react-router-dom";

export default function PostsSection() {
    const posts = useSelector(state => state.postsReducer);
    const [searchParams] = useSearchParams();
    const [postNum, setPostNum] = useState(0);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => { setPage(+searchParams.get('p') || 1) }, [searchParams]);
    useEffect(() => { setPostNum(posts.length) }, [posts]);
    useEffect(() => { if (postNum !== 0 && Math.ceil(postNum / 10) < page) { navigate('/posts') } }, [postNum, page, navigate])
    if(postNum==0){
        return ( <div className="text-purple-700 font-bold mt-4 tracking-widest text-center">
            尚無主題
        </div>);
    }
    function create_pagination() {
        return (
            <div>
                {postNum > 10 && (
                    <div className="flex">
                        {Array.from({ length: Math.ceil(postNum / 10) }, (_, i) => i + 1).map(i =>
                            <div key={i} className={"bg-purple-300 rounded-md w-10 mx-1 border-2 flex-wrap cursor-pointer select-none " + (page === i ? "border-purple-900 border-2" : " ")} onClick={() => { window.scrollTo(0, 0); navigate(`/posts?p=${i}`) }}>
                                <p className="text-center text-white">{i}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className="">
            {create_pagination()}
            {posts.slice(10 * (page - 1), 10 * (page - 1) + 10).map(data_post => <Link key={data_post.id} to={`/posts/${data_post.id}`}><Post data_post={new DataPost(data_post)} /></Link>)}
            {create_pagination()}
        </div>
    );
}