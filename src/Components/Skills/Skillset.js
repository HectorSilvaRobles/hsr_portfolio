import React, { Component } from 'react'
import './skillset.css'

export class Skillset extends Component {
    render() {
        return (
            <div className='skillset'>
                <div className='skillset-div'>
                    <div className='skillset-header'>
                        <h1>Skills</h1>
                        <h2>Technologies & tools I have experience with.</h2>
                    </div>
                    <div className='skillset-body'></div>
                </div>
            </div>
        )
    }
}

export default Skillset
