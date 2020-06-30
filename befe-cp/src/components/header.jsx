import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="navBar">
            <li><a className="current" href="/dist/Home.html">Home</a></li>
            <li><a href="/dist/Hobbies&Interests.html">Hobbies & Interests</a></li>
            <li><a href="/dist/FuturePlans.html">Future Plans</a></li>
            <li><a href="/dist/Portfolio.html">My Portfolio</a></li>
            <li><a href="/dist/ContactMe.html">Contact</a></li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;