import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import SEO from "../components/Seo";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { getDate } from "../utils/helpers";
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

export default () => (
  <Layout>
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
              return (
                <ul>
                  {edges.map(({ node }) => (
                    <li key={node.fields.slug}>
                      <article
                        style={{
                          marginBottom: rhythm(2)
                        }}
                      >
                        <header
                          style={{
                            marginBottom: rhythm(1 / 4)
                          }}
                        >
                          <h3
                            style={{
                              marginBottom: rhythm(2 / 4)
                            }}
                          >
                            <Link
                              to={node.fields.slug}
                              style={{ boxShadow: "none" }}
                            >
                              {node.frontmatter.title}
                            </Link>
                          </h3>
                          <small>
                            <span
                              style={{
                                marginRight: rhythm(1 / 2)
                              }}
                            >
                              {getDate(node.frontmatter.date)}
                            </span>
                            🗸📖☕
                            <span>{node.timeToRead}</span>
                            min de lectura
                          </small>
                        </header>
                        <p>{node.excerpt}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              );
            }}
          />
        </section>
        <Aside />
      </main>
    </Content>
  </Layout>
);
