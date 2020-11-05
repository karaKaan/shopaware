import React from 'react'
import { Link } from 'react-router-dom'


import './Footer.scss'


export default function Footer() {
    return(
        <div className="footerWrapper">
            <h2 className="footerTitle">ShopAware</h2>
            <hr id="hrFooter"/>
            <div>
                <ul>
                    <li className="footerItem"><Link>Link</Link></li>
                    <p id="verticalRule">|</p>
                    <li className="footerItem"><Link>Link</Link></li>
                    <p id="verticalRule">|</p>
                    <li className="footerItem"><Link>Link</Link></li>
                    <p id="verticalRule">|</p>
                    <li className="footerItem"><Link>Link</Link></li>
                    <p id="verticalRule">|</p>
                    <li className="footerItem"><Link>Link</Link></li>
                    <p id="verticalRule">|</p>
                    <li className="footerItem"><Link>Link</Link></li>
                </ul>    
            </div>
        </div>
    )    
} 