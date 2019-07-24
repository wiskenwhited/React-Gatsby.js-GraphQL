import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Header from "./header"
import Body from "./home"
import Footer from "./footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Body />
    <Footer />
  </Layout>
)

export default IndexPage
