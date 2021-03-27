import React from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';


const Navbar = ({ icon, title }) => {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        {/* <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul> */}
      </nav>
    );
  };

Navbar.defaultProps = {
    title: 'DevDirectory',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

export default Navbar
