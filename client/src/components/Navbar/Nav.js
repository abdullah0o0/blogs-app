import React from 'react'
import './Nav.css'
import{Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BLOGS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Register
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/signin">Sign in</Link></li>
                  <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
