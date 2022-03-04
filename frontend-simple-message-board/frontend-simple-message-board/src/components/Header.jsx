import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="wrap bg-white shadow-md">
            <div className="flex justify-center items-center lg:justify-start my-2 lg:my-4">
                <NavLink to='/'>
                    <div className="text-purple-800 text-2xl">Tedious 留言板</div>
                </NavLink>
            </div>
        </div>
    );
}