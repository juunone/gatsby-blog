import React from 'react';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const about = (props) =>{
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="about" />
      hi
    </Layout>
  )
};

export default about;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`