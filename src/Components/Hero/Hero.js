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
                    <div className='hero-section1-image'>
                        <img src={image1} />
                    </div>
                    <div className='hero-section1-info'>
                        <h1>Hello, <br></br>Allow me to introduce myself.</h1>
                    </div>
                </div>
                <div className='hero-section2'>
                    <div className='hero-section2-info'>
                        <h1>I am a software Engineer.</h1>
                        <h2>Looking to begin a new career.</h2>
                    </div>
                    <div className='hero-section2-image'>
                         <img src={image2} />
                    </div>
                </div>
                <div className='hero-section3'>
                    <div className='hero-section3-image'>
                        <img src={image3} />
                    </div>
                    <div className='hero-section3-info'>
                        <h1>My Why.</h1>
                        <h2>I want to be part of this evergrowing tech world, where ideas can be brought to life. I believe technology can be a tool used for good. I have a strong desire in creating software solutions that help solve problems.</h2>
                    </div>
                </div>

            </div>
        )
    }
}

export default Hero