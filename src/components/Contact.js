import React from 'react'
import Message from '../assets/message.png'
const Contact = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center py-4 my-2'>
          <h1 className='text-primary'>Have some question?</h1>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5 d-flex justify-content-center'>
          <img src={Message} alt='message' />
        </div>
        <div className='col-md-6 border p-4 mb-2'>
          <form >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput2" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className='btn btn-outline-primary w-25'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact