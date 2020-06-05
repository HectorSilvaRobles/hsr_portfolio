import React, {Component} from 'react';
import {FaPlay, FaGithub} from 'react-icons/fa'
import covTracker from '../../media/covscreen.png'
import abfutbol from '../../media/abfutbolt.png'
import sgsite from '../../media/sgscren.png'
import reactIcon from '../../media/reacticon.png'
import fireBaseIcon from '../../media/firebase.png'
import nodeIcon from '../../media/nodeicon.png'
import mongoIcon from '../../media/mongo.png'
import awsIcon from '../../media/aws.png'
import './projects.css'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            nav1: null,
            nav2: null,
        }
    }

    componentDidMount = ( ) => {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        })
    }

    setRedirect = () => {
        this.setState({redirect: true})
    }

    render( ){

        const settings = {
            className: 'center',
            infinite: true,
            arrows: false,
            dots: true,
            slidesToShow: 3,
            speed: 500,
            swipeToSlide: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings : {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings : {
                        slidesToShow: 1
                    }
                }
            ]
        }

        return (
            <div className='projects' id='projects'>
                <div className='projects-title'>
                    <h1>See My Work</h1>
                    <h2>Check out what I've built. </h2>
                </div>
                <div className='projects-div'>
                    <div className='projects-carousel'>
                        <Slider {...settings} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}>
                            <div className='project-option'>
                                <h1>AB Futbol Training</h1>
                            </div>
                            <div className='project-option'>
                                <h1>COVID19 Tracker</h1>
                            </div>
                            <div className='project-option'>
                                <h1>SG Construction</h1>
                            </div>
                        </Slider>
                    </div>
                    <div className='projects-info'>
                        <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className='project-slider'>
                            <div className='project-card'>
                                <div className='pc-real'>
                                    <div className='project-image'>
                                        <img src={abfutbol} />
                                    </div>
                                    <div className='p-info'>
                                        <h1>AB Futbol Training</h1>
                                        <p>This web app helps the team at AB Futbol Training keep track of each athlete's progress while they attend the academy. </p>
                                        <div className='p-builtwith'>
                                            <div className='p-bw-top'>
                                                <h1>Built With</h1>
                                            </div>
                                            <div className='p-bw-bottom'>
                                                <div className='tech-icon'>
                                                    <img src={reactIcon} alt='react' />
                                                </div>
                                                <div className='tech-icon'>
                                                    <img src={nodeIcon} alt='node' />
                                                </div>
                                                <div className='tech-icon'>
                                                    <img src={mongoIcon} alt='mongodb' />
                                                </div>
                                                <div className='tech-icon'>
                                                    <img src={awsIcon} alt='aws' />
                                                </div>
                                                <div className='tech-icon'>
                                                    <img src={fireBaseIcon} alt='firebase' />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='project-buttons'>
                                            <button className='view-live' >
                                                <a href='https://www.abfutboltraining.com/' target='_blank'>
                                                    <FaPlay size={25} />
                                                    <h1>View Live</h1>
                                                </a>
                                            </button>
                                            <button className='view-code'>
                                                <a href='https://github.com/HectorSilvaRobles/ft-client' target='_blank'>
                                                    <FaGithub size={30} />
                                                    <h1>View Code</h1>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project-card'>
                                <div className='pc-real'>
                                    <div className='project-image'>
                                        <img src={covTracker} />
                                    </div>
                                    <div className='p-info'>
                                        <h1>COVID-19 Tracker</h1>
                                        <p>Developed a web application to visualize the data of COVID19 outbreaks throughout the world. It was built with the intention to inform users of the scale of the pandemic globally.</p>
                                        <div className='p-builtwith'>
                                            <div className='p-bw-top'>
                                                <h1>Built With</h1>
                                            </div>
                                            <div className='p-bw-bottom'>
                                                <div className='tech-icon'>
                                                    <img src={reactIcon} alt='react' />
                                                </div>
                                                <div className='tech-icon'>
                                                    <img src={fireBaseIcon} alt='firebase' />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='project-buttons'>
                                            <button className='view-live' >
                                                <a href='https://covtracker.xyz' target='_blank'>
                                                    <FaPlay size={25} />
                                                    <h1>View Live</h1>
                                                </a>
                                            </button>
                                            <button className='view-code'>
                                                <a href='https://github.com/HectorSilvaRobles/COVID19_Tracker' target='_blank'>
                                                    <FaGithub size={30} />
                                                    <h1>View Code</h1>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project-card'>
                                <div className='pc-real'>
                                    <div className='project-image'>
                                        <img src={sgsite} />
                                    </div>
                                    <div className='p-info'>
                                        <h1>SG Construction</h1>
                                        <p>I built a landing page for Silva-Garcia Construction. The goal was to showcase their services and collect leads as well.</p>
                                        <div className='p-builtwith'>
                                            <div className='p-bw-top'>
                                                <h1>Built With</h1>
                                            </div>
                                            <div className='p-bw-bottom'>
                                                <div className='tech-icon'>
                                                    <img src={reactIcon} alt='react' />
                                                </div>
                                                <div className='tech-icon'>
                                                    <img src={nodeIcon} alt='node' />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='project-buttons'>
                                            <button className='view-live' >
                                                <a href='https://sg-site-1.herokuapp.com/' target='_blank'>
                                                    <FaPlay size={25} />
                                                    <h1>View Live</h1>
                                                </a>
                                            </button>
                                            <button className='view-code'>
                                                <a href='https://github.com/HectorSilvaRobles/sg_landingpage/' target="_blank">
                                                    <FaGithub size={30} />
                                                    <h1>View Code</h1>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects