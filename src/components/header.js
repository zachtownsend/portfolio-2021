import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header className="fixed top-5 w-full flex justify-center items-center h-16">
    <Logo />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
