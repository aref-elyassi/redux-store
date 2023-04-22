import React from 'react'

import Shop from '../assets/shop2.png'
const Introduction = () => {
  return (
    <div className='container mt-5'>
        <div className='row d-flex justify-content-between'>
                <div className='col-md-6'>
                    <h2 className='text-primary'>
                        Our Shop
                    </h2>
                    <hr/>
                    <p className='text-jsutify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu mi, id accumsan arcu malesuada a. Vestibulum ante urna, mattis sed lacus ut, interdum venenatis mi. Nullam commodo venenatis ultrices. Maecenas egestas, turpis non commodo facilisis, neque nisl pharetra dui, vitae efficitur justo mi in arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mi et velit aliquet, et gravida orci lacinia. Cras ut orci et erat pretium porttitor. Curabitur gravida velit at posuere pharetra. Nullam non feugiat neque. In nec convallis lorem, eu dapibus libero'</p>
                </div>
                <div className='col-md-5'>
                    <img src={Shop} className=' w-100 h-100' alt='banner'/>
                </div>
        </div>
    </div>
  )
}

export default Introduction
