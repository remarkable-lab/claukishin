import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import SEO from "../components/Seo";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Posts from "../components/Posts";
import { rhythm } from "../utils/typography";

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
            author
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
      title="All posts"
      keywords={[`blog`, `gatsby`, `javascript`, `react`]}
    />
    <Header />
    <Content>
      <main
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: ${rhythm(2)};
          & > section,
          & > aside {
            width: 100%;
            height: 100%;
          }
          @media (min-width: 900px) {
            & > section {
              width: 70%;
            }
            & > aside {
              width: 30%;
            }
          }
        `}
      >
        <section>
          <StaticQuery
            query={queryPosts}
            render={({ allMarkdownRemark }) => {
              const { edges } = allMarkdownRemark;
              return <Posts posts={edges} />;
            }}
          />
        </section>
        <Aside />
      </main>
    </Content>
  </Layout>
);
