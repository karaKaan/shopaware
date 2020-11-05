import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'


export default function Home() {
    const [userInput, setUserInput] = useState("")

console.log(userInput);
    return(
        <div>
            <form action="" className="formWrapper">
                <input type="text" placeholder="Search your Amazon Product" onChange={e => {setUserInput(e.target.value)}}/>
                <Link to={`/product/${userInput}`}><button>Search</button></Link>

            </form>
        </div>
    )
}