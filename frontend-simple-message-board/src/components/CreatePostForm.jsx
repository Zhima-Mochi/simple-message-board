import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../actions'

export default function CreatePostForm() {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function resetForm() {
        setAuthor("");
        setTitle("");
        setContent("");
    }

    const dispatch = useDispatch();


    return (
        <div className="wrap">
            <div className=" bg-white mb-4 rounded-sm shadow-md flex flex-col text-purple-700 px-8 py-2">
                <h1 className=" text-xl text-center tracking-widest font-semibold">發佈留言</h1>
                <div className="flex my-2">
                    <div>作者：</div>
                    <input className="flex-1 border-2 border-gray-200 px-2" placeholder="" value={author} onChange={(e) => { setAuthor(e.target.value) }} ></input>
                </div>
                <div className="flex my-2">
                    <div>標題：</div>
                    <input className="flex-1 border-2 border-gray-200 px-2" placeholder="" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                </div>
                <div className="flex my-2">
                    <div>內容：</div>
                    <textarea className="flex-1 border-2 border-gray-200 px-2 h-96 resize-none" value={content} onChange={(e) => { setContent(e.target.value) }} ></textarea>
                </div>
                <div className="flex justify-center">
                    <div className="mx-4 tracking-widest text-purple-400 cursor-pointer select-none" onClick={() => { resetForm(); }}>清除</div>
                    <div className="mx-4 tracking-widest text-purple-900 cursor-pointer select-none" onClick={() => {
                        if (author === "" || title === "" || content === "") {
                            alert("欄位不可為空！");
                        } else {
                            dispatch(actions.create_post_begin(title, author, content));
                        }
                    }} >送出</div>
                </div>
            </div>
        </div>
    );
}