import React, {Component} from 'react';
import './projects.css'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

class Projects extends Component {
    constructor(props){
        super(props)

        this.state = {
            nav1: null,
            nav2: null
        }
    }

    componentDidMount = ( ) => {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        })
    }

    render( ){

        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '50px',
            slidesToShow: 3,
            speed: 500,
            swipeToSlide: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1150,
                    settings : {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 700,
                    settings : {
                        slidesToShow: 1
                    }
                }
            ]
        }
        return (
            <div className='projects'>
                <div className='projects-title'>
                    <h1>See My Work</h1>
                    <h2>Check out what I've built. </h2>
                </div>
                <div className='projects-div'>
                    <div className='projects-carousel'>
                        <Slider {...settings} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}>
                            <div className='project-option'>
                                <h1>Think twice</h1>
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
                        <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
                            <div className='project-card'>
                                <div className='pc-real'>
                                    <div className='project-image'>

                                    </div>
                                    <div className='p-info'>
                                        <h1>COVID-19 Tracker</h1>
                                        <p>This is the description for the COVID-19 live tracker. This should be at least 3 sentences. So write something simple, short, and good. </p>
                                        <div className='p-builtwith'>

                                        </div>
                                        <div className='project-buttons'>
                                            <button className='view-live'>View Live</button>
                                            <button className='view-code'>View Code</button>

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