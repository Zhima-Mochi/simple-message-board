import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import ResponsesSection from "../components/ResponsesSection";
import * as actions from '../actions'
import { useParams } from "react-router";

export default function PostResponse() {
    const { post_id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.get_post_with_responses(post_id));
    }, [dispatch, post_id]);
    return (<div className="flex flex-col justify-between min-h-screen bg-purple-50">
        <Header />
        <div className="flex-1 my-4">
            <ResponsesSection />
        </div>
        <div>

        </div>
    </div>);
}