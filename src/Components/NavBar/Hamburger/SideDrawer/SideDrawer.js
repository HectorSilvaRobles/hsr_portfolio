import React from 'react';
import './sidedrawer.css';
import {Link} from 'react-scroll'

export default function SideDrawer(props){
    let drawerClasses = 'drawer'
    if(props.show){
        drawerClasses = 'drawer open';
    }


    return (
        <div className={drawerClasses}>
            <Link 
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                onClick={props.click}
                duration= {500}>Home</Link>
            <Link 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                onClick={props.click}

                duration= {500}>Projects</Link>
            <Link 
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={100}
                onClick={props.click}

                duration= {500}>Skills</Link>
            <Link 
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                onClick={props.click}

                offset={-70}
                duration= {500}>Testimonials</Link>
            <Link 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                onClick={props.click}

                offset={0}
                duration= {500}>About</Link>
        </div>
    )
}