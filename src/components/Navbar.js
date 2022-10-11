import React from 'react'
import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'

function Navbar({ title, aboutText, mode, changeMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='#'>
            {title}
          </a>
          {/* <Link className="navbar-brand" to={'/'}>
            {title}
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/'>
                  Home
                </a>
                {/* <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link> */}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={'/about'}>
                  {aboutText}
                </Link>
              </li> */}
            </ul>

            <div
              className={`form-check form-switch text-${
                mode === 'light' ? 'dark' : 'light'
              }`}
            >

              {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>changeMode('primary')}></div>
                <div className="bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>changeMode('danger')}></div>
                <div className="bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>changeMode('success')}></div>
                <div className="bg-dark rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>changeMode('dark')}></div>
                <div className="bg-light rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={()=>changeMode('light')}></div>
              </div> */}

              <input
                className="form-check-input"
                onClick={changeMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />

              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string,
}

Navbar.defaultProps = {
  title: 'Default Title',
  aboutText: 'About Us',
}
