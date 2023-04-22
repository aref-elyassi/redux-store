import React from 'react'
import Carousel from './Carousel'
import Introduction from './Introduction'
import Image1 from '../assets/images/products/iphone11.png'
import Image2 from '../assets/iphone13.png'
import Image3 from '../assets/iphone10.jpg'
import Image4 from '../assets/iphone9.png'

const Home = () => {
  return (
    <div className='container-fluid'>
      <Carousel />
      <Introduction />
      <hr />
      <div className='row mt-5'>
        <h1 className='text-center'>Our Product Sample</h1>

        <div className='col-md-3 '>

          <div class="card d-flex align-items-center justify-content-center flex-column">
            <img src={Image1} class="card-img-top w-50" style={{ height: '200px' }} alt="this is iphone" />
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 '>

          <div class="card d-flex align-items-center justify-content-center flex-column">
            <img src={Image2} class="card-img-top w-50" style={{ height: '200px' }} alt="this is iphone" />
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 '>

          <div class="card d-flex align-items-center justify-content-center flex-column">
            <img src={Image3} class="card-img-top w-50" style={{ height: '200px' }} alt="this is iphone" />
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 '>

          <div class="card d-flex align-items-center justify-content-center flex-column">
            <img src={Image4} class="card-img-top w-50" style={{ height: '200px' }} alt="this is iphone" />
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>


     
    </div>
  )
}

export default Home
