import React, {Component} from 'react'
import './skills.css'
import Slider from 'react-slick'
import Nodejs from '../../media/nodeicon.png'
import ReactIcon from '../../media/reacticon.png'
import Javascript from '../../media/javascripticon.png'
import Mongoodb from '../../media/mongoicon.png'
import Redux from '../../media/redux.png'
import CSS from '../../media/cssicon.png'
import Adobe from '../../media/adobexdicon.png'
import AWS from '../../media/awsicon.png'
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
            speed: 500,
            autoplay: true,
            swipeToSlide: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
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
                                    <img src={Nodejs} alt='nodejs' />
                                    <h1> NodeJs</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={ReactIcon} alt='react' />
                                        <h1>ReactJs</h1>
                                    </div>
                                </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={Javascript} alt='javascript' />
                                        <h1>Javascript</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={Mongoodb} alt='mongoodb' />
                                        <h1>MongoDB</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={Redux} alt='redux' />
                                        <h1>Redux</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={CSS} alt='css' />
                                        <h1>CSS</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={Adobe} alt='adobexd' />
                                        <h1>AdobeXD</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={Firebase} alt='firebase' />
                                        <h1>Firebase</h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-box'>
                            <div className='skill-card'>
                                <div className='skill-card-top'>
                                        <img src={AWS} alt='aws' />
                                        <h1>AWS</h1>
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