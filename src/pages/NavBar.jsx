import {Outlet, Link} from "react-router-dom";

export default function NavBar (props){
    return (
        <div className="title">
            <div id={"title-container"} className={"flex justify-center"}>
                <h1 className={"text-[72px] text-white-001 pt-2"}>Portfolio</h1>
            </div>
            <nav className="nav-bar">
                <div id={"nav-container"} className={"flex flex-row justify-center space-x-20 align-items-center"}>
                    <Link to="/" className={"text-4xl underline text-white-001 hover:text-blue-002 "}>About Me</Link>
                    <Link to="/Projects" className={"text-4xl underline text-white-001 hover:text-blue-002"}>Projects</Link>
                    <Link to="/Resume" className={"text-4xl underline text-white-001 hover:text-blue-002"}>Resume</Link>
                </div>
            </nav>
        </div>


    )
}
// <>
//     <nav>
//         <ul>
//             <li>
//
//             </li>
//             <li>
//
//             </li>
//         </ul>
//     </nav>
// </>


