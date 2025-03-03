import {Outlet, Link} from "react-router-dom";

export default function NavBar (props){
    return (
        <div className="title">
            <div id={"title-container"} className={"flex justify-center"}>
                <u className={"text-white-001"}><h1 className={"text-[72px] text-white-001"}>Portfolio</h1></u>
            </div>
            <nav className="nav-bar">
                <div id={"nav-container"} className={"flex flex-row justify-around align-items-center"}>
                    <button type={"button"} className={"button"}><Link to="/" className={"text-xl"}>david</Link></button>
                    <button type={"button"} className={"button"}><Link to="/Projects">icecream</Link></button>
                    <button type={"button"} className={"button"}><Link to="/Resume">Resume</Link></button>
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


