import React, { Component } from 'react';
import './intro.css';

export class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div>
                    <div className='intro-words'>
                        <h1>2+</h1>
                        <h2>Years Experience Designing & developing full stack web applications.</h2>
                    </div>
                    <div className='intro-button'>
                        <button>View Skills</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Intro
