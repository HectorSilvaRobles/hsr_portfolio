import React, {Component} from 'react';
import './resumecta.css';
import resumePDF from '../../media/resume.pdf'

class ResumeCTA extends Component {
    render(){
        return (
            <div className='resume-cta'>
                <a href={resumePDF} target='_blank'>
                    <h1>See My Resume</h1>
                </a>
            </div>
        )
    }
}

export default ResumeCTA