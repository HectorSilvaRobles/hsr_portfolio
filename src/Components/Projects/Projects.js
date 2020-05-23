import React, {Component} from 'react';
import {FaPlay, FaGithub} from 'react-icons/fa'
import covTracker from '../../media/covscreen.png'
import reactIcon from '../../media/reacticon.png'
import fireBaseIcon from '../../media/firebase.png'
import {Redirect} from 'react-router-dom'


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
            redirect: false,
            covTrackerSite: false,
            covTrackerGit: false,
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
                                <h1>COVID19 Tracker</h1>
                            </div>
                            <div className='project-option'>
                                <h1>Around the world</h1>
                            </div>
                            <div className='project-option'>
                                <h1>Son of Sam</h1>
                            </div>
                        </Slider>
                    </div>
                    <div className='projects-info'>
                        <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className='project-slider'>
                            <div className='project-card'>
                                <div className='pc-real'>
                                    <div className='project-image'>
                                        <img src={covTracker} />
                                    </div>
                                    <div className='p-info'>
                                        <h1>COVID-19 Tracker</h1>
                                        <p>This is the description for the COVID-19 live tracker. This should be at least 3 sentences. So write something simple, short, and good. </p>
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
                                                <a href='http://covtracker.xyz'>
                                                    <FaPlay size={25} />
                                                    <h1>View Live</h1>
                                                </a>
                                            </button>
                                            <button className='view-code'>
                                                <a href='https://github.com/HectorSilvaRobles/COVID19_Tracker'>
                                                    <FaGithub size={30} />
                                                    <h1>View Code</h1>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project-card'>
                                <h1>im feeling rough</h1>
                            </div>
                            <div className='project-card'>
                                <h1>Ive got to maintain</h1>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects