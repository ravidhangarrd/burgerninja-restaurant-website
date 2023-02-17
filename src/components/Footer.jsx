import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer id='contact'>
        <div className='list'>
            <h4>Menu Links</h4>
            <hr width="40px" color='#ff702a'/>
            <ul>
                <li><NavLink className={"list-item"}>Home</NavLink></li>
                <li><NavLink className={"list-item"}>About</NavLink></li>
                <li><NavLink className={"list-item"}>Menu</NavLink></li>
                <li><NavLink className={"list-item"}>Service</NavLink></li>
                <li><NavLink className={"list-item"}>Contact</NavLink></li>
            </ul>
        </div>
        <div className='list'>
        <h4>Our Service</h4>
            <hr width="40px" color='#ff702a'/>
            <ul>
                <li><NavLink className={"list-item"}>Web Design</NavLink></li>
                <li><NavLink className={"list-item"}>Web Development</NavLink></li>
                <li><NavLink className={"list-item"}>Marketing</NavLink></li>
                <li><NavLink className={"list-item"}>Product Management</NavLink></li>
                <li><NavLink className={"list-item"}>Graphic Design</NavLink></li>
            </ul>
        </div>
        <div className='list'>
        <h4>Information</h4>
            <hr width="40px" color='#ff702a'/>
            <ul>
                <li><NavLink className={"list-item"}>About Us</NavLink></li>
                <li><NavLink className={"list-item"}>Delivery Information</NavLink></li>
                <li><NavLink className={"list-item"}>Privacy Policy</NavLink></li>
                <li><NavLink className={"list-item"}>Terms & Conditions</NavLink></li>
            </ul>
        </div>
        <div className="end-list">
        <h4>Contact Us</h4>
            <hr width="40px" color='#ff702a'/>
            <ul>
                <li><NavLink><i id='icon1' class="fa fa-facebook" aria-hidden="true"></i></NavLink></li>
                <li><NavLink><i id='icon2' class="fa fa-instagram" aria-hidden="true"></i></NavLink></li>
                <li><NavLink><i id='icon3' class="fa fa-twitter" aria-hidden="true"></i></NavLink></li>
                <li><NavLink><i id='icon4' class="fa fa-youtube-play" aria-hidden="true"></i></NavLink></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer