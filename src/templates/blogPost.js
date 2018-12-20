import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import { getDate } from "../helper";

export default function BlogPost(props) {
  const { data, pageContext } = props;
  const { prev, next } = pageContext;
  const post = data.markdownRemark;
  return (
    <Layout>
      <Content maxWidth="700px">
        <article>
          <header
            css={css`
              margin-bottom: 1rem;
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
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
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
