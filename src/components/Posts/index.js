import React from "react";
import { Link } from "gatsby";
import { getDate } from "../../utils/helpers";
import { rhythm } from "../../utils/typography";

export default ({ posts }) => (
  <ul style={{ listStyle: "none", marginLeft: 0 }}>
    {posts.map(({ node, last }) => (
      <li key={node.fields.slug}>
        <article
          style={{
            marginBottom: rhythm(2),
            padding: last ? "1rem" : "0 1rem",
            background: last ? "#efefef" : "white",
            borderRadius: last ? "7px" : 0
          }}
          className="article"
        >
          <header
            style={{
              marginBottom: `${rhythm(2 / 4)}`
            }}
          >
            <h3
              style={{
                margin: "1rem 0"
              }}
            >
              <Link
                to={node.fields.slug}
                style={{
                  boxShadow: "none",
                  color: "#212529"
                }}
              >
                <span>{node.frontmatter.title}</span>
              </Link>
            </h3>
            <small style={{ fontSize: "16px" }}>
              <span
                style={{
                  marginRight: rhythm(1 / 2)
                }}
              >
                {getDate(node.frontmatter.date)}
              </span>
              📖
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
