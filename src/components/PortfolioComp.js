import React from 'react'

const PortfolioComp = (props) => {
    console.log(props)
    return (
        <div>
            <h1>A Thing I've Done!</h1>
            <p>This is portfolio item {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioComp