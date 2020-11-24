import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title={`Home`} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <>
        <h2>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        {node.frontmatter.description ? (
          <small>{node.frontmatter.description} -</small>
        ) : null}
        <small>{node.frontmatter.date}</small>
        <p>{node.excerpt}</p>
      </>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
