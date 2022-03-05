import { data } from "autoprefixer";
import { useSelector } from "react-redux";
import { DataPost } from "../constants";
import CreateResponseForm from "./CreateResponseForm";
import Post from "./Post";
import Response from "./Response";



export default function ResponsesSection() {
    const post_with_responses_data = new DataPost(useSelector(state => state.responsesReducer));
    const responses_data = post_with_responses_data.responses_list;
    if(post_with_responses_data.id === undefined){
        return (
            <div className="wrap">
            <div className="mt-12 text-purple-700 text-center tracking-widest">
                無此主題
            </div>
        </div>
        );
    }
    return (
        <div className="wrap">
            <Post data_post={post_with_responses_data} />
            <div className="flex bg-purple-100 rounded-md flex-col  text-purple-700 shadow-sm mb-4">
                <div className="mx-8 my-2">
                    {responses_data.map(elem => <Response key={elem.id} data={elem} />)}
                    {responses_data.length === 0 && <div className="h-20 pt-6 text-center tracking-widest"> 尚無留言</div>}
                </div>
            </div>
            <CreateResponseForm post_id={post_with_responses_data.id} />
        </div>
    );
}