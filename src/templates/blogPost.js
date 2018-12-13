import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout, { Content } from "../components/layout";

export default function BlogPost(props) {
  const { data, pageContext } = props;
  const { prev, next } = pageContext;
  const post = data.markdownRemark;
  return (
    <Layout>
      <Content>
        <article>
          <h1>{post.frontmatter.title}</h1>
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
