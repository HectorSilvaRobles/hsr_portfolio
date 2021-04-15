import React, { Component } from 'react'
import './portfolio.css'

export class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio'>
                <div className='portfolio-div'>
                    <div className='portfolio-header'>
                        <h1>Portfolio</h1>
                        <h2>Check out the projects I’ve completed In the Past.</h2>
                    </div>
                    <div className='portfolio-body'></div>
                </div>
            </div>
        )
    }
}

export default Portfolio
