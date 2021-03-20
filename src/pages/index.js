import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroSection from "../components/IntroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <h1>Test</h1>
  </Layout>
)

export default IndexPage
