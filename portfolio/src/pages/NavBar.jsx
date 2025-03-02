import {Outlet, Link} from "react-router-dom";

export default function NavBar (props){
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">my name</Link>
                    </li>
                    <li>
                        <Link to="/Projects">icecream</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}