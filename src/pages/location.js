import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Location" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            The wedding will take place on Friday 3rd & Saturday 4th September 2021.
          </h2>
          <h3>Friday 3rd: Location TK</h3>
          <p>A traditional Nigerian wedding ceremony will take place on Friday night.</p>
          <h3>§</h3>
          <h3>Saturday 4th: Brooklyn Grange Farm, Sunset Park, Brooklyn</h3>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.brooklynGrange.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Brooklyng Grange in the summer</figcaption>
          </figure>
          <h3 id="dynamic-styles">Brooklyn Grange</h3>
          <p>
          {" "}
            <a href="https://www.brooklyngrangefarm.com/sunset-park-events">
              Brooklyn Grange Farm
            </a>{" "} is a venue in Sunset park.
          </p>
          <p>
            Here we will give more information about the venue, access, etc.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    brooklynGrange: file(
      relativePath: { eq: "brooklyn-grange-garden.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
