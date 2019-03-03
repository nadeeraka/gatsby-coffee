import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navBarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  }
  navbarOn = () => {
    console.log("on")
  }

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
              {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.navbarOn}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
              <ul className=" navbar-nav mx-auto">
                {this.state.links.map(link => {
                  return (
                    <li className="nav-item " key={link.id}>
                      <Link to={link.path} className="nav-link text-capitalize">
                        {link.text}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
