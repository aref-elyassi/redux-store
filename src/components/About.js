import React from 'react'
import { Link } from 'react-router-dom'
import AboutImage from '../assets/about.png'

const About = () => {
    return (
        <div className='container mt-4 py-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-primary fw-bold'>About us</h1>
                    <p className='lead'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu mi, id accumsan arcu malesuada a. Vestibulum ante urna, mattis sed lacus ut, interdum venenatis mi. Nullam commodo venenatis ultrices. Maecenas egestas, turpis non commodo facilisis, neque nisl pharetra dui, vitae efficitur justo mi in arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mi et velit aliquet, et gravida orci lacinia. Cras ut orci et erat pretium porttitor. Curabitur gravida velit at posuere pharetra. Nullam non feugiat neque. In nec convallis lorem, eu dapibus libero. Donec vitae sem ac leo elementum hendrerit. Ut eget purus quis odio tincidunt iaculis eget at dui. Proin luctus, purus id tincidunt posuere, nunc neque efficitur neque, quis porta odio ligula et magna. Phasellus ac vulputate nunc, ac efficitur nisl.
                    </p>
                    <Link className='btn btn-outline-primary' to='/contact'>Contact</Link>
                </div>
                <div className='col-md-6'>
                    <img src={AboutImage} alt='about' width='100%' />
                </div>
            </div>
        </div>
    )
}

export default About