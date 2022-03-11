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
        <div className="">
            <div className=" bg-white mb-4 rounded-sm shadow-md flex flex-col text-purple-700 px-8 py-2">
                <h1 className=" text-xl text-center  font-semibold">Create Your Post</h1>
                <div className="flex my-2 xs:flex-col">
                    <div className="w-24">Your Name:</div>
                    <input className="flex-1 border-2 border-gray-200 px-2" placeholder="" value={author} onChange={(e) => { setAuthor(e.target.value) }} ></input>
                </div>
                <div className="flex my-2 xs:flex-col">
                    <div className="w-24">Title:</div>
                    <input className="flex-1 border-2 border-gray-200 px-2" placeholder="" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                </div>
                <div className="flex my-2 xs:flex-col">
                    <div className="w-24">Content:</div>
                    <textarea className="flex-1 border-2 border-gray-200 px-2 h-48 lg:h-96 resize-none" value={content} onChange={(e) => { setContent(e.target.value) }} ></textarea>
                </div>
                <div className="flex justify-center font-semibold">
                    <div className="mx-4  text-purple-400 cursor-pointer select-none" onClick={() => { resetForm(); }}>Clear</div>
                    <div className="mx-4  text-purple-900 cursor-pointer select-none" onClick={() => {
                        if (author === "" || title === "" || content === "") {
                            alert("Blank is not allowable！");
                        } else {
                            dispatch(actions.create_post_begin(title, author, content));
                        }
                    }} >Submit</div>
                </div>
            </div>
        </div>
    );
}