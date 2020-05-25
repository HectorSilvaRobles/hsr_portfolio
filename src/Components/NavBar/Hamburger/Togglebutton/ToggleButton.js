import React from 'react';
import './togglebutton.css'

export default function ToggleButton(props){
    return (
        <button className='toggle' onClick={props.click}>
            <div className='toggle-button'></div>
            <div className='toggle-button'></div>
            <div className='toggle-button'></div>
        </button>
    )
}