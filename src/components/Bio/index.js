import React from "react";
import { graphql } from "gatsby";
import { rhythm } from "../../utils/typography";

export const BioInfo = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { id: { eq: "bio" } } }) {
      edges {
        node {
          frontmatter {
            id
            title
            description
          }
        }
      }
    }
  }
`;

function Bio(props) {
  console.log("bio");
  console.log(props);
  return (
    <section key="about">
      <article>
        <header>
          <h3
            style={{
              fontSize: rhythm(3 / 5),
              margin: `${rhythm(2 / 4)} 0 ${rhythm(2 / 4)} 0`
            }}
          >
            ClauKishin
          </h3>
          <p>
            Hola, soy Caukishin, mi meta es la libertad financiera, la tuya
            tambien si has visitado este blog, en todo caso espero disfrutes mis
            posts, sin mas que decir: Bienvenido
          </p>
        </header>
      </article>
    </section>
  );
}

export default Bio;
