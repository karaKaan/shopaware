import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import  './Product.scss'

export default function Product() {
    const [search, setSearch] = useState(window.location.href.split('/')[4])
    
    // useEffect(async(search) => {
        
    // })



    return(
        <div>
            {search}
        </div>
    )
}
