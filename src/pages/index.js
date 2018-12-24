import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import SEO from "../components/Seo";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { getDate } from "../helper";

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
          margin-bottom: 2rem;
          section,
          aside {
            width: 100%;
          }
          @media (min-width: 700px) {
            & section {
              width: 70%;
            }
            aside {
              width: 30%;
            }
          }
        `}
      >
        <section>
          <header>
            <h3>Mis ultimos posts</h3>
          </header>
          <StaticQuery
            query={queryPosts}
            render={({ allMarkdownRemark }) => {
              const { edges } = allMarkdownRemark;
              return (
                <ul
                  css={css`
                    padding-inline-start: 0;
                    list-style-type: none;
                    margin-inline-start: 0;
                  `}
                >
                  {edges.map(({ node }) => (
                    <li key={node.fields.slug}>
                      <article>
                        <header>
                          <h3
                            css={css`
                              font-size: 26px;
                            `}
                          >
                            <Link to={node.fields.slug}>
                              {node.frontmatter.title}
                            </Link>
                          </h3>
                          <small>
                            <span
                              css={css`
                                margin-right: 0.5rem;
                              `}
                            >
                              {getDate(node.frontmatter.date)}
                            </span>
                            🗸📖☕
                            <span
                              css={css`
                                margin-left: 0.3rem;
                              `}
                            >
                              {node.timeToRead}
                            </span>
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
