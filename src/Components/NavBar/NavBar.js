import React, {Component} from 'react';
import './navbar.css'
import Logo from '../../media/HSR-copy.png'
import {Link} from 'react-scroll'
import Backdrop from './Hamburger/Backdrop/Backdrop'
import SideDrawer from './Hamburger/SideDrawer/SideDrawer'
import ToggleButton from './Hamburger/Togglebutton/ToggleButton'

class NavBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            drawerOpen: false
        }
    }

    // For toggling hamburger menu
    drawerToggleClick = () => {
        this.setState((prevState) => {
            return {drawerOpen: !prevState.drawerOpen}
        })
    }

    backdropClick = () => {
        this.setState({drawerOpen: false})
    }
    render(){
        let backdrop;
        if(this.state.drawerOpen){
            backdrop = <Backdrop click={this.backdropClick} />
        }

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
                    offset={-50}
                    duration= {500}>Home</Link>
                    <Link 
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {500}>Projects</Link>
                    <Link 
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>Skills</Link>
                     <Link 
                    activeClass="active"
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration= {500}>Testimonials</Link>
                     <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}>About</Link>
                </div>
                <div className='togglebutton'>
                    <ToggleButton click={this.drawerToggleClick} />
                    <SideDrawer show={this.state.drawerOpen} className='sidedrawer' />
                    {backdrop}
                </div>
            </div>
        )
    }
}

export default NavBar