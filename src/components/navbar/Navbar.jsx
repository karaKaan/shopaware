import React from 'react'
import { Link } from 'react-router-dom'

    
import './Navbar.scss'

export default function Navbar(){
    return(
        <div className="navContainer">
            <div className="navItemsWrapper">
                <ul className="navItems">
                    <li id="navItem"> <Link>Link 1</Link></li> 
                    <li id="navItem"> <Link>Link 2</Link></li> 
                    <li id="navItem"> <Link>Link 3</Link></li> 
                    <li id="loginItem"> <Link>Login</Link></li> 
                </ul>
            </div>
        </div>
    )
    }