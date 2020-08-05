import React, { Fragment, useContext, useEffect} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user, loadUser} = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
      }, []);
    
    const onLogout = () => {
        logout();
       ;
    } 

    const member = (
        <Fragment>
            <li>Welcome {user && user.name}</li>
            <nav className="link-dir" style={{width:'100%',marginLeft: '10em'}}>
                  <Link to="/Homep" className="animate">Home</Link>
                  <Link to="/About" className="animate">About</Link>
                  <Link to="/Gallery" className="animate">Gallery</Link>
                  <Link to="/Homep" className="animate" onClick={onLogout}>Leave</Link>
            </nav>
        </Fragment>
    )
    const guest = (
        <Fragment>
            <nav className="link-dir" style={{width:'100%',marginLeft: '10em'}}>
                <Link to="/Homep" className="animate">Home</Link>
                <Link to="/About" className="animate">About</Link>
                <Link to="/Login" className="animate">Sign in</Link>
                <Link to="/Register" className="animate">Sign up</Link>

              </nav>
        </Fragment>
    )

    return (
        <div className="navbar navbar-expand-sm bg-dark navbar-dark fixed">
            <ul>
                {isAuthenticated ? member : guest}
            </ul>
        </div>
    )
}

export default Navbar
