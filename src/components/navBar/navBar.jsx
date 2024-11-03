import "./Navbar.css"
// import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        
        <nav className="NavBar">
            <h1> 💻 ANSEL</h1>
            <ul>
                <li>ABOUT</li>
                <li>SKILL</li>
                <li>MY PROJECT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
        </>
    );
};

export default NavBar;