import React, {Component} from 'react';
import './about.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io'

class About extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div className='about' id='about' >
                <div className='about-title'>
                    <h1>About Me</h1>
                    <h2>Get to know who I am.</h2>
                </div>
                <div className='about-body'>
                    <div className='about-image'>

                    </div>
                    <p>Fueled with a passion to learn and eager to build awesome products. Looking to be part of team where I can contribute my skills and knowledge as a software engineer.</p>
                    <div className='about-links'>
                        <button className='resume'>
                            <IoIosPaper size={30} />
                            <h1>Resume</h1>
                        </button>
                        <button className='linkedin'>
                            <FaLinkedin size={30} />
                            <h1>LinkedIn</h1>
                        </button>
                        <button className='github'>
                            <FaGithub size={30} />
                            <h1>GitHub</h1>
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default About