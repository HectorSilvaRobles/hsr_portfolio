import React, {Component} from 'react';
import './about.css'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import resumePDF from '../../media/resume.pdf'
import {IoIosPaper} from 'react-icons/io'

class About extends Component {
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
                            <a href={resumePDF} target='_blank'>
                                <IoIosPaper size={30} />
                                <h1>Resume</h1>
                            </a>
                        </button>
                        <button className='linkedin'>
                            <a href='https://www.linkedin.com/in/hector-silva-robles/' target='_blank'>
                                <FaLinkedin size={30} />
                                <h1>LinkedIn</h1>
                            </a>
                        </button>
                        <button className='github'>
                            <a href='https://github.com/HectorSilvaRobles' target='_blank'>
                                <FaGithub size={30} />
                                <h1>GitHub</h1>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About