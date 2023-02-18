import React, {useState} from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Header = () =>{

    let [disPro, setDisPro] = useState("block");

    return(
        <>
        <header>
                <div className='logo-container'>
                    <h2>
                        <Link className='logo-text' to={"#"}>BurgerNinja</Link>
                    </h2>
                </div>
                <div id='nav-con' className='nav-container'>
                    <ul>
                        <li><Link className={"nav-link-item"} to={"#"} smooth>Home</Link></li>
                        <li><Link className={"nav-link-item"} to={"#about"} smooth>About</Link></li>
                        <li><Link className={"nav-link-item"} to={"#food-menu"} smooth>Menu</Link></li>
                        <li><Link className={"nav-link-item"} to={"#over-services-container"} smooth>Service</Link></li>
                        <li><Link className={"nav-link-item"} to={"#contact"} smooth>Contact</Link></li>
                    </ul>
                </div>
                <div id='side-bar-icon'>
                    <NavLink onClick={()=>{
                        document.getElementById("nav-con").style.display = disPro;
                        (disPro === "block")?setDisPro("none"):setDisPro("block");
                    }} id='toggle-btn' to='#'><i class="fa fa-bars" aria-hidden="true"></i></NavLink>
                </div>
        </header>
        </>
    )
}

export default Header;