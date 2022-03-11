import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from '../actions'

export default function CreateResponseForm({post_id}) {
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    function resetForm() {
        setAuthor("");
        setMessage("");
    }

    const dispatch = useDispatch();


    return (
        <div className="">
            <div className=" bg-white mb-4 rounded-sm shadow-md flex flex-col text-purple-700 px-8 py-2">
                <h1 className=" text-xl text-center  font-semibold">Response</h1>
                <div className="flex my-2 xs:flex-col">
                    <div className="w-24">Your name:</div>
                    <input className="flex-1 border-2 border-gray-200 px-2" placeholder="" value={author} onChange={(e) => { setAuthor(e.target.value) }} ></input>
                </div>
                <div className="flex my-2 xs:flex-col">
                    <div className="w-24">Message：</div>
                    <textarea className="flex-1 border-2 border-gray-200 px-2 h-48 lg:h-96 resize-none" value={message} onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                </div>
                <div className="flex justify-center font-semibold">
                    <div className="mx-4  text-purple-400 cursor-pointer select-none" onClick={() => { resetForm(); }}>Clear</div>
                    <div className="mx-4  text-purple-900 cursor-pointer select-none" onClick={() => {
                        if (author === "" ||  message === "") {
                            alert("blank is not allowable!");
                        } else {
                            dispatch(actions.create_response(post_id,  author, message));
                        }
                    }} >Submit</div>
                </div>
            </div>
        </div>
    );
}