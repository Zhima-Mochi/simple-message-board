import Footer from "../components/Footer";
import Header from "../components/Header";
import PostsSection from "../components/PostsSection";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from '../actions'

export default function Main() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.get_posts_begin());
    }, [dispatch]);

    return (
        <div className="flex flex-col justify-between min-h-screen bg-purple-50">
            <Header />
            <div className="flex-1 my-4">
                <PostsSection />
            </div>
            <div>456</div>
            <Footer />
        </div>
    )
}