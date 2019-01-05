import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SEO from "../../components/Seo";
import Posts from "../../components/Posts";
import Layout, { Content } from "../../components/layout";

const queryPosts = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { public: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date
            tags
            public
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Mis artículos"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Content>
      <section>
        <h1
          style={{
            marginTop: "1rem",
            marginBottom: "1.5rem"
          }}
        >
          Artículos
        </h1>
        <StaticQuery
          query={queryPosts}
          render={({ allMarkdownRemark }) => {
            const { edges } = allMarkdownRemark;
            return <Posts posts={edges} />;
          }}
        />
      </section>
    </Content>
  </Layout>
);
