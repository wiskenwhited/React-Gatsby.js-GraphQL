import React from "react"
import images from "../../constants/image.js"

import "./styles.css"

const Body = () => (
  <div>
    <div className="cloud">
      <span className="cloud-title"> CORE TEAM </span>
    </div>
    <div className="teams-body">
      <div className="teams-body-image">
        <img src={images.nick} alt="" className="nick" />
        <span className="teams-name"> Nick Chisiu </span>
        <span className="teams-role"> Co-Founder and Chief Developer </span>
        <div className="photo-button">
          <span className="photo-button-bio"> Bio </span>
        </div>
      </div>
      <div className="teams-body-image">
        <img src={images.alex} alt="" className="nick" />
        <span className="teams-name"> Nick Chisiu </span>
        <span className="teams-role"> Co-Founder and Product Manager </span>
        <div className="photo-button">
          <span className="photo-button-bio"> Bio </span>
        </div>
      </div>
    </div>
    <div className="read-whitePaper">
      <span className="white-title"> Whitepaper </span>
      <div className="white-line" />
      <span className="white-content"> Byte Network: A blockchain cloud solution. </span>
      <button className="white-button">
        <img src={images.readText} alt="" className="read-image" />
        <span className="read-text"> READ WHITEPAPER </span>
      </button>
    </div>
  </div>
)

export default Body
