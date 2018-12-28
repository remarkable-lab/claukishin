import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import { getDate } from "../utils/helpers";

export default function BlogPost(props) {
  const { data, pageContext } = props;
  const { prev, next } = pageContext;
  console.log(prev, next);
  const post = data.markdownRemark;
  const disqusShortname = "hansgarcia";
  const disqusConfig = {
    identifier: post.fields.slug,
    title: post.frontmatter.title
  };
  return (
    <Layout>
      <Content maxWidth="600px">
        <article>
          <header
            css={css`
              margin: 2rem 0;
            `}
          >
            <h1
              css={css`
                font-size: 30px;
              `}
            >
              {post.frontmatter.title}
            </h1>
            <small>
              <span
                css={css`
                  margin-right: 0.5rem;
                `}
              >
                {getDate(post.frontmatter.date)}
              </span>
              🗸📖☕
              <span
                css={css`
                  margin-left: 0.3rem;
                `}
              >
                {post.timeToRead}
              </span>
              min de lectura
            </small>
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            css={css`
              & p {
                width: 100%;
              }
              & img {
                display: flex;
                width: 100%;
                max-width: 500px;
                height: auto;
                margin: auto;
                box-shadow: 0 2px 20px #d4d3d3;
              }
              & blockquote {
                font-style: italic;
                background: #f9f9f9;
                border-left: 10px solid #ccc;
                margin: 1.5em 10px;
                padding: 0.5em 10px;
                font-size: 1.1rem;
              }
              & blockquote p {
                display: inline;
              }
            `}
          />
        </article>
        <br />
        {(prev && prev.frontmatter.public) ||
        (next && next.frontmatter.public) ? (
          <section
            css={css`
              background-color: white;
              padding: 1rem;
              margin: 2rem 0;
              border: 2px dashed #c641c9;
              box-shadow: 0 2px 2px #e6e6e6;
              transition: box-shadow 300ms;
              &:hover {
                box-shadow: 0 2px 15px #e6e6e6;
                transition: box-shadow 300ms;
              }
              & a {
                color: gray;
                &:hover {
                  color: #383737;
                }
              }
            `}
          >
            <ul
              css={css`
                margin-bottom: 0;
              `}
            >
              {prev && (
                <li>
                  <span
                    role="img"
                    aria-label="back"
                    css={css`
                      margin-right: 8px;
                    `}
                  >
                    ⬅️
                  </span>
                  <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
                </li>
              )}
              {next && (
                <li>
                  <span
                    role="img"
                    aria-label="foward"
                    css={css`
                      margin-right: 8px;
                    `}
                  >
                    ➡️
                  </span>
                  <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
                </li>
              )}
            </ul>
          </section>
        ) : null}
        <section>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </section>
      </Content>
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
      }
      timeToRead
      fields {
        slug
      }
    }
  }
`;
