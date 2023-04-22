import React from 'react'
import Spinner from '../gif/Spinner-4.gif'
const Loader = () => {
  return (
    <div>
      <div style={{width: "100%", textAlign: "center"}}>
            <img src={Spinner}  alt="Loading" style={{width:'100px'}} />
        </div>
    </div>
  )
}

export default Loader
