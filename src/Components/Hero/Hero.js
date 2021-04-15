import React, {Component} from 'react';
import './hero.css'
import image2 from '../../media/1.png'
import image1 from '../../media/2.png'
import image3 from '../../media/3.png'


class Hero extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div className='hero' id='hero'>
                <div className='hero-section1'>
                    <div className='hero-section1-info'>
                        <h1>Please Allow Me To Introduce Myself.</h1>
                        <h2>I am a software engineer who enjoys developing software solutions.</h2>
                        <div className='hero-buttons'>
                            <button className='hero-button-port'>Portfolio</button>
                            <button className='hero-button-resu'><h1>Resume</h1></button>
                        </div>
                    </div>
                    <div className='hero-section1-image'>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Hero