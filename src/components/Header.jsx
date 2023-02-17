import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';


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
                        <li><Link className={"nav-link-item"} to={"#"} smooth>Home</Link></li>
                        <li><Link className={"nav-link-item"} to={"#about"} smooth>About</Link></li>
                        <li><Link className={"nav-link-item"} to={"#food-menu"} smooth>Menu</Link></li>
                        <li><Link className={"nav-link-item"} to={"#over-services-container"} smooth>Service</Link></li>
                        <li><Link className={"nav-link-item"} to={"#contact"} smooth>Contact</Link></li>
                    </ul>
                </div>
                <div id='side-bar-icon'>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
        </header>
        </>
    )
}

export default Header;