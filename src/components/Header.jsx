import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const Header = () =>{
    return(
        <>
        <header>
                <div className='logo-container'>
                    <h2>
                        <Link className='logo-text' to={"#"}>BurgerNinja</Link>
                    </h2>
                </div>
                <div className='nav-container'>
                    <ul>
                        <li><NavLink className={"nav-link-item"} to={"#"}>Home</NavLink></li>
                        <li><NavLink className={"nav-link-item"} to={"#"}>About</NavLink></li>
                        <li><NavLink className={"nav-link-item"} to={"#"}>Menu</NavLink></li>
                        <li><NavLink className={"nav-link-item"} to={"#"}>Service</NavLink></li>
                        <li><NavLink className={"nav-link-item"} to={"#"}>Contact</NavLink></li>
                    </ul>
                </div>
        </header>
        </>
    )
}

export default Header;