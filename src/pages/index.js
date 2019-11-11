import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="heroGroup">
        <div className="heroBackground">
        <h1 className="heroTitle">Learn Design and code react app</h1>
        <p className="heroParagraph">Complete courses about the best tools and design systems Prototype
        and build apps with React and swift.</p>
            <Link className="heroButton" to="/page-2/">watch the video</Link>
      </div>
        </div>
     
    </div>
  </Layout>
)

export default IndexPage
