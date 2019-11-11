import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
 <div className="header">
  <div className="headerGroup">
    <Link to="/"><img src={logo} width="30" /></Link>
    <Link to="/courses">Courses</Link>
    <Link to="/downloads">Downloads</Link>
    <Link to="/workshops">Courses</Link>
    <Link to="/buy"><button>Buy</button></Link>
  </div>
 </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
