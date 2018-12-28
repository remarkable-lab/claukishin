import React from "react";
import { Link } from "gatsby";
import { getDate } from "../../utils/helpers";
import { rhythm } from "../../utils/typography";

export default ({ posts }) => (
  <ul style={{ listStyle: "none" }}>
    {posts.map(({ node }) => (
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
              <Link to={node.fields.slug} style={{ boxShadow: "none" }}>
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
