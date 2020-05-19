import React, {Component} from 'react'
import './skills.css'
import Slider from 'react-slick'
import Nodejs from '../../media/nodeicon.png'
import ReactIcon from '../../media/reacticon.png'
import Javascript from '../../media/javascripticon.png'
import Mongoodb from '../../media/mongoicon.png'
import Redux from '../../media/redux.png'
import CSS from '../../media/css3.png'
import Adobe from '../../media/adobexdicon.png'
import AWS from '../../media/aws-logo.png'
import Firebase from '../../media/firebase.png'

class Skills extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        const settings = {
            dots: true,
            className: 'center',
            centerMode: true,
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 500,
            autoplay: true,
            swipeToSlide: true,
            autoplaySpeed: 2000,
            responsive: [
                
                {
                  breakpoint: 1080,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },

                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
              ]
        };

        return (
            <div className='skills'>
                <div className='skills-title'>
                    <h1>What I Know</h1>
                    <h2>Technologies I've worked with, so far.</h2>
                </div>
                <div className='skills-body'>
                    <Slider {...settings}>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={Nodejs} alt='nodejs' />
                                    </div>
                                    <h1> NodeJs</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={ReactIcon} alt='react' />
                                    </div>
                                    <h1>ReactJs</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={Firebase} alt='firebase' />
                                    </div>
                                    <h1>Firebase</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top bigger'>
                                    <div className='skill-card-img'>
                                        <img src={AWS} alt='aws' />
                                    </div>
                                    <h1>AWS</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={Mongoodb} alt='mongoodb' />
                                    </div>
                                    <h1>MongoDB</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={Javascript} alt='javascript' />
                                    </div>
                                    <h1>Javascript</h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={Redux} alt='redux' />
                                    </div>
                                    <h1>Redux</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={CSS} alt='css' />
                                    </div>
                                     <h1>CSS</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                    <div className='skill-card-img'>
                                        <img src={Adobe} alt='adobexd' />
                                    </div>
                                    <h1>AdobeXD</h1>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Skills