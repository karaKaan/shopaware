import React from 'react'
    
import './Navbar.scss'

export default function Navbar(){
    return(
        <div className="navContainer">
            <div className="navItemsWrapper">
                <ul className="navItems">
                    <li id="navItem">Link 1</li>
                    <li id="navItem">Link 2</li>
                    <li id="navItem">Link 3</li>
                    <li id="loginItem">Login</li>
                </ul>
            </div>
        </div>
    )
    }