import React from "react"
import images from "../../constants/image.js"

import "./styles.css"

const Body = () => (
  <div>
    <div className="i-stock-1048990642">
      <div className="full-stack-text">
        <span className="full-stack-blockchain"> FULL-STACK BLOCKCHAIN CLOUD SOLUTION </span>
        <span className="build-decentralized"> BUILD DECENTRALIZED INFRASTRUCTURES </span>
        <span className="serverless-realtime"> serverless, realtime, secure | </span>
      </div>
      <div className="button-account">
        <button className="rectangle-free-account"> <span className="button-free-account"> GET FREE ACCOUNT </span> </button>
        <button className="rectangle-check-docs"> <span className="check-the-docs"> CHECK THE DOCS </span> </button>
      </div>
    </div>
    <div className="framework">
      <div>
        <img src={images.code} alt="" />
      </div>
      <div className="framework-develop">
        <div className="framework-header">
          <img src={images.fix} alt="" className="framework-icon-fix"/>
          <span className="framework-title"> FRAMEWORK </span>
          <span className="framework-content"> Developing full stack backends it has never been easier. Writing production-ready code is a breeze. </span>
        </div>
        <div className="node-python">
          <span className="node"> NODEJS </span>
          <span className="python"> PYTHON </span>
        </div>
        <div className="http-database-cron-websockets-handler">
          <span className="http"> HTTP </span>
          <span className="database"> DATABASE </span>
          <span className="cron"> CRON </span>
          <span className="websockets"> WEBSOCKETS </span>
          <span className="handler"> HANDLER </span>
        </div>
        <div className="codebox-contentEditable">
          <div className="codebox-number">
            <span className="codebox-left-number">1</span>
            <span className="codebox-left-number">2</span>
            <span className="codebox-left-number">3</span>
            <span className="codebox-left-number">4</span>
          </div>
          <div className="codebox-handler">
            <img src={images.handlerText} alt="" />
          </div>
        </div>
        <div className="config-text"><span className="config"> CONFIG </span></div>
        <div className="codebox-contentEditable">
          <div className="codebox-number">
            <span className="codebox-left-number">1</span>
            <span className="codebox-left-number">2</span>
            <span className="codebox-left-number">3</span>
            <span className="codebox-left-number">4</span>
            <span className="codebox-left-number">5</span>
          </div>
          <div className="codebox-config">
            <img src={images.configText} alt="" />
          </div>
        </div>
        <div className="framework-bottom">
          <div className="npm-install">
            <div className="npm-install-dots">
              <div className="npm-install-dots-red"></div>
              <div className="npm-install-dots-yellow"></div>
              <div className="npm-install-dots-blue"></div>
            </div>
            <span className="npm-install-text"> $ npm install bytesquash -g </span>
          </div>
          <div className="learn-more">
            <span className="learn-more-text">LEARN MORE</span>
          </div>
        </div>
      </div>
      <div className="framework-symbol-image">
        <img src={images.symbol} alt="" className="framework-symbol" />
      </div>
    </div>
    <div>
      <div className="platform">
        <div className="platform-platform">
          <div className="platform-platform-title">
            <img src={images.platform} alt="" className="platform-image" />
            <span className="platform-title">PLATFORM</span>
          </div>
          <div className="platform-platform-text">Collaborate with your team, use continous integration and deploy apps with just a simple code push.</div>
          <div className="platform-learn-more">
            <span className="platform-image-learn-more" > LEARN MORE </span>
            <img src={images.platform_symbol} alt="" className="platform-image-symbol" />
          </div>
        </div>
        <div className="platform-cloud">
          <div className="platform-platform-title">
            <img src={images.cloud} alt="" className="platform-image" />
            <span className="platform-title">CLOUD</span>
          </div>
          <div className="platform-platform-text">Our cloud solution is powered by Byte Network secure stack which includes Ethereum Swarm + Whisper, BigchainDB & more.
          </div>
          <div className="platform-learn-more">
            <span className="platform-image-learn-more" > LEARN MORE </span>
            <img src={images.platform_symbol} alt="" className="platform-image-symbol" />
          </div>
        </div>
      </div>
    </div>
    <div className="turned-for-developers">
      <img src={images.turned_image} alt="" className="turned-image" />
      <div className="turned-for-developers-title">
        <span className="turned-for-developers-name"> TUNED FOR DEVELOPERS </span>
        <div className="turned-for-developers-check-docs">
          <span className="turned-for-developers-check"> CHECK THE DOCS </span>
          <img src={images.platform_symbol} alt="" className="platform-image-symbol" />
        </div>
      </div>
      <div className="turned-for-developers-content">
        Byte Squash is the ultimate tool for creating scalable and secure APIs to deliver
        high expectations for mission critical businesses operations.
        <br /><br />
        We like to call Byte Squash … “a tool not created around our own imagination”
        and better one forked and adjusted from years of consultancy and tested on
        clients infrastructures.
      </div>
    </div>
    <div className="we-open-source">
      <div className="we-open-source-content">
        <div className="we-open-source-content-heart">
          <span className="we-open-source-content-we"> We </span>
          <img src={images.heart} alt="" className="we-open-image-heart" />
        </div>
        <span className="we-open-source-content-we"> Open Source </span>
        <span className="we-open-text"> Built on the communities open source trends, Byte Network
        operates on the top of Ethereum technologies and BigChainDB
        by joining a large cluster of enthusiasts and blockchain developers
        and contribuitors.
        </span>
      </div>
      <div>
        <img src={images.WeOpenSource} alt="" className="image-we-open" />
      </div>
    </div>
    <div className="start-building">
      <img src={images.start_building_top} alt="" className="start-building-top" />
      <div className="start-building-content">
        <span className="start-building-top-title"> START BUILDING TOP-NOTCH APIs, IS FREE !  </span>
        <span className="start-building-top-text">Feel free to try our solution, we offer $100 credit to all new users.
        Setting a new project is easy as dead and if you need help we’ll
        make sure that you will get it just in time. </span>
        <button  className="start-building-rectangle">
          <span className="start-building-button"> GET FREE ACCOUNT </span>
        </button>
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
