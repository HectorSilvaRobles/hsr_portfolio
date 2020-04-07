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

                </div>
            </div>
        )
    }
}

export default Projects