import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = (props) => {
    console.log(props)
    return (
        <div>
            <h1>My Work</h1>
            <p>Checkout the following things I've done:</p>
            <Link to="/portfolio/1">Portfolio One</Link>
            <Link to="/portfolio/2">Portfolio Two</Link>
        </div>
    )
}

export default Portfolio