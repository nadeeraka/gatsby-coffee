import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends Component {
  state = {
    navBarOpen: false,
    css: "",
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
    this.setState({ navBarOpen: true })
    if (this.state.navBarOpen) {
      this.setState({ css: "collapse navbar-collapse show", navBarOpen: false })
    } else {
      this.setState({
        css: "collapse navbar-collapse ",
        navBarOpen: true,
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link to="/" className="navbar-brand c">
              <img src={logo} alt="logo" />
              {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              onClick={this.navbarOn}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
              <ul className="nav navbar-nav  mx-auto ">
                {this.state.links.map(link => {
                  return (
                    <li className="nav-item " key={link.id}>
                      <Link to={link.path} className="nav-link text-capitalize">
                        {link.text}
                      </Link>
                    </li>
                  )
                })}
                <li className="nav-item  ml-sm-5">
                  <FaCartArrowDown className="cart-icon" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
export default Navbar
