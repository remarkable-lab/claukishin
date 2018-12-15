import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import Header from "../components/Header";
import Aside from "../components/Aside";

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
    <Header />
    <Content>
      <main
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          section,
          aside {
            width: 100%;
          }
          @media (min-width: 700px) {
            section {
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
            <h3>Blog posts</h3>
          </header>
          <StaticQuery
            query={queryPosts}
            render={({ allMarkdownRemark }) => {
              const { edges } = allMarkdownRemark;
              return (
                <ul>
                  {edges.map(({ node }) => (
                    <li key={node.fields.slug}>
                      <article>
                        <header>
                          <h3>
                            <Link to={node.fields.slug}>
                              {node.frontmatter.title}
                            </Link>
                          </h3>
                          <p>{node.excerpt}</p>
                        </header>
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
