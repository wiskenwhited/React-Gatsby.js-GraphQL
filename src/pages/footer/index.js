import React from "react"
import "./styles.css"

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-products">
        <span className="products-products"> PRODUCTS </span>
        <span className="products-framework-span"> Framework </span>
        <span className="products-framework"> Platform </span>
        <span className="products-framework"> Cloud </span>
      </div>
      <div className="footer-developers">
        <span className="products-products"> DEVELOPERS </span>
        <span className="products-framework-span"> Docs </span>
        <span className="products-framework"> Examples </span>
        <span className="products-framework"> Gitter Chat </span>
      </div>
      <div className="footer-company">
        <span className="products-products"> COMPANY </span>
        <span className="products-framework-span"> Blog </span>
        <span className="products-framework"> Meetups </span>
        <span className="products-framework"> Privacy </span>
        <span className="products-framework"> Terms & conditions </span>
      </div>
      <div className="footer-connect">
        <span className="products-products"> CONNECT </span>
        <span className="products-framework-span"> Twitter </span>
        <span className="products-framework"> Youtube </span>
        <span className="products-framework"> Github </span>
        <span className="products-framework"> Linkedin </span>
      </div>
      <div className="footer-signup">
        <span className="signup-text"> Sign up for our newsletter to <br />stay current. </span>
        <div className="signup-form">
          <input type="text" placeholder="Email address" className="signup-input" />
          <button className="signup-form-button">
            <span className="signup-form-button-text"> SIGN UP </span>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
