import { Link } from "react-router-dom";

export default function Post({ data_post }) {
    return (
        <div className=" bg-white rounded-sm shadow-md my-4">
            <div className="post px-8 flex flex-col text-purple-800">
                <div className="text-2xl my-2">{data_post.title}</div>
                <div className="flex flex-col sm:flex-row text-xs  justify-between">
                    <div className="mb-2">作者：{data_post.author}</div>
                    <div className="mb-2">發佈時間：{data_post.getFormatPublishedDate()}</div>
                </div>
                <div className="border-t-2 border-purple-200 my-1"></div>
                <div className="flex-1 mb-6 text-sm rounded-sm">
                    {data_post.content}
                </div>
                <div className="flex justify-end mb-2 text-xs text-purple-500">留言數： {data_post.responses_num} 則</div>
            </div>
        </div>
    );
}