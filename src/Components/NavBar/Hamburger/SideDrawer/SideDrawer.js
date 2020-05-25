import React, {useState} from 'react';
import './sidedrawer.css';


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
                duration= {500}>Home</Link>
        </div>
    )
}