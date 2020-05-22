import React, {Component} from 'react'
import './testimonials.css'

class Testimonials extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='testimonials'>
                <div className='testimonials-title'>
                    <h1>My Testimonials</h1>
                    <h2>See what people have to say.</h2>
                </div>
                <div className='testimonials-body'>
                    <div className='testimonials-card'>
                        <div className='testimonials-info'>
                            <p>I would not hesitate to work with Hector in the future because of how reliable and hard working he is. Hector's peers would constantly notice how he was the first in class every morning and the last to leave, he definitely added to the class atmosphere in a very positive way and would no doubt add that same benefit to any team he works on</p>
                        </div>
                        <div className='testimonials-person'>
                            <div className='testimonials-header test-head-1'>
                                <h1>Joshua Borup</h1>
                                <h2>Instructor at DevMountain</h2>
                            </div>
                        </div>
                    </div>
                    <div className='testimonials-card'>
                        <div className='testimonials-info'>
                            <p>Hector is a proactive and tireless individual who would make a great addition to any team. He is always one of the first students in class and normally the last student to leave. Hector impressed all of us with his dedication. I would highly recommend him for any position, as he naturally rises to the occasion when presented with something he is passion about. </p>
                        </div>
                        <div className='testimonials-person'>
                            <div className='testimonials-header test-head-2'>
                                <h1>Desiree Kobasic</h1>
                                <h2>Campus Director</h2>
                            </div>
                        </div>
                    </div>
                    <div className='testimonials-card'>
                        <div className='testimonials-info'>
                            <p>Hector is a dedicated worker. During his time at DevMountain he was always the first to arrive and the last to leave. He obviously puts value into learning beyond the scope of the projects he works on. He is eager and willing to learn, put himself out there. He is not afraid to try new things, to test his code limits to see if a solution works.</p>
                        </div>
                        <div className='testimonials-person'>
                            <div className='testimonials-header test-head-3'>
                                <h1>Travis Stratton</h1>
                                <h2>Mentor</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials