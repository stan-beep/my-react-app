import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { Component } from 'react';
import "./Header.css"
import logo from '../images/gatsby-icon.png'





class Header extends Component {
  state={
    hasScrolled:false
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll=(event)=>{
    const scrollTop = window.pageYOffset;

    if( scrollTop > 50 ) {
      this.setState({
        hasScrolled: true
      })
    }
    else {
      this.setState({
        hasScrolled: false
      })
    }

  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header headerScrolled': 'header'}>
      <div className="headerGroup">
        <Link to="/"><img src={logo} width="30" /></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Courses</Link>
        <Link to="/buy"><button className="headerButton">Buy</button></Link>
      </div>
     </div>
    );
  }
}

export default Header;


