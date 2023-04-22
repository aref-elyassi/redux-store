import React from 'react'
import { Link } from 'react-router-dom'
import CartBtn from './CartBtn'
import Login from './Login'
import Signup from './Signup'

const Header = () => {
  return (
    <div>
        <nav className ="navbar navbar-expand-lg bg-body-tertiary bg-light py-1 navbar-white shadow-sm">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold fs-4" to="/">Shop Project</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page"
                        to='/products'>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="contact">Contact</Link>
                    </li>
                  </ul>
                <Login/>
                <Signup/>
                <CartBtn/>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header
