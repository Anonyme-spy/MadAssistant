import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="Nav-b">
            <div className="main">
                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">MadAssistant</h2>
                    </div>

                    <div className="menu">
                        <ul>
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/about">ABOUT</NavLink></li>
                            <li><NavLink to="/service">SERVICE</NavLink></li>
                            <li><NavLink to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </div>

                    <div className="search">
                        <input className="srch" type="search" placeholder="Type To text"/>
                        <NavLink to="#">
                            <button className="btn">Search</button>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};