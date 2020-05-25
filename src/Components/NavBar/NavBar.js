import React, {Component} from 'react';
import './navbar.css'
import Logo from '../../media/HSR-copy.png'
import {Link} from 'react-scroll'
import ToggleButton from './Hamburger/Togglebutton/ToggleButton'

class NavBar extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }
    render(){
        return (
            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={Logo} alt='hsr logo' />
                </div>
                <div className='nav-links'>
                    <Link 
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>Home</Link>
                    <Link 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>Projects</Link>
                    <Link 
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>Skills</Link>
                     <Link 
                    activeClass="active"
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>Testimonials</Link>
                     <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>About</Link>
                </div>
                <div className='togglebutton'>
                    <ToggleButton />
                </div>
            </div>
        )
    }
}

export default NavBar