import React from "react"
import { Link } from "gatsby"

import Image from "../../constants/image.js"
import "./styles.css"

const Header = () => (
  <div className="body">
    <div className="logoImage">
      <Link to="/">
        <img src={Image.logo} alt="" className="logo"/>
      </Link>
    </div>
    <div className="menu">
      <select className="products" defaultValue="products">
        <option value="products">products</option>
      </select>
      <Link to="/developers/">
        <select className="developers" default="developers">
          <option value="developers">developers</option>
        </select>
      </Link>
      <select className="company" default="company">
        <option value="company">company</option>
      </select>
    </div>
    <div className="login-button">
      <Link to="/teams/">
        <button className="rectangle-login" > <span className="login">LOGIN</span> </button>
      </Link>
      <button className="rectangle-register" > <span className="register">REGISTER</span> </button>
    </div>
  </div>
)

export default Header
