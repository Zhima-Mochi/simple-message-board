import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="wrap bg-white shadow-md">
            <div className="flex justify-center items-center lg:justify-start my-2 lg:my-4">
                <NavLink to='/' className="text-2xl">
                    <span className="text-purple-800 font-semibold">Tedious</span> <span className="text-purple-800">Message Board</span>
                </NavLink>
            </div>
        </div>
    );
}