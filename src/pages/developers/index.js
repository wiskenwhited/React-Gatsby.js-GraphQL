import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"

import Header from "../header"
import Body from "./body"
import Footer from "../footer"

const Developers = () => (
  <Layout>
    <SEO title="Developers" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Body />
    <Footer />
  </Layout>
)

export default Developers
