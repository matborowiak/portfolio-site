import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = (props) => {
    console.log(props)
    return (
        <div>
            <h1>This is portfolio page!</h1>
            <Link to="/portfolio/1">Portfolio One</Link>
            <Link to="/portfolio/2">Portfolio Two</Link>
        </div>
    )
}

export default Portfolio