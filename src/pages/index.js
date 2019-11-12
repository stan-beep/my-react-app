import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import Card from "../components/Card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="heroGroup">
        <div className="heroBackground">
        <h1 className="heroTitle">Learn <br />Design and code react apps</h1>
        <p className="heroParagraph">Complete courses about the best tools and design systems Prototype
        and build apps with React and swift.</p>
            <Link className="heroButton" to="/page-2/">watch the video</Link>
            
            <div className="logos">
              <img src={require('../images/logo1.png')} width="50" alt="swift"/>
              <img src={require('../images/logo2.png')} width="50" alt="github"/>
              <img src={require('../images/link.jpg')} width="50" alt="linkiden"/>
              <img src={require('../images/React.js_logo.png')} width="50" alt="reactjs"/>

            </div>
            
          <svg width="1440" height="270" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  fill="white">
                <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
                values="
                M0 13.2465C388.573 82.8672 782 -38.4895 1356 13.2465V116H0V13.2465Z;

                M0 20.2955C711.116 63.6873 964.19 -42.2094 1356 20.2955V116H0V20.2955Z;

                M0 21.193C226.895 -54.2153 1001.24 102.186 1356 21.193V112H0V21.193Z;

                M0 13.2465C388.573 82.8672 782 -38.4895 1356 13.2465V116H0V13.2465Z

                "
                />
                </path> 
               </svg>  

      </div>
        </div>
     <div className="cards">
        <h2>11 courses, more coming</h2>
        <div className="cardGroup">
        <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
         <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
         <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
         <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
           <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
         <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
         <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
         <Card 
        title="React for designers"
        text="12 sections"
        images={require('../images/images1.jpeg')}
        />
        </div>
     </div>
    </div>
  </Layout>
)

export default IndexPage




















