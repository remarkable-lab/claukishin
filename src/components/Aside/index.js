import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import Img from "gatsby-image";

const query = graphql`
  query {
    allInstaNode(limit: 6) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`;

function Aside() {
  return (
    <aside
      css={css`
        padding: 1em;
        background-color: white;
        section {
          width: 100%;
        }
      `}
    >
      <section key="about">
        <article>
          <header>
            <h3>ClauKishin</h3>
            <p>
              Hola, soy Caukishin, mi meta es la libertad financiera, la tuya
              tambien si has visitado este blog, en todo caso espero disfrutes
              mis posts, sin mas que decir: Bienvenido
            </p>
          </header>
        </article>
      </section>
      <section key="tags">
        <h3>Tags</h3>
      </section>
      <section
        key="instagram"
        css={css`
          width: 100%;
          background-color: white;
        `}
      >
        <header>
          <h3>Instagram</h3>
          <p>Mis ultimos 4 post en instagram</p>
        </header>
        <ul
          css={css`
            width: 100%;
            display: flex;
            flex: wrap;
            flex-wrap: wrap;
            li {
              width: calc((100% / 2) - 7.5px);
              min-width: 100px;
              margin-bottom: 5px;
            }
            li:nth-child(2n) {
              margin: 0 5px 5px;
            }
            li:nth-child(1n) {
              margin-left: 5px;
            }
          `}
        >
          <StaticQuery
            query={query}
            render={({ allInstaNode }) => {
              const { edges } = allInstaNode;
              return edges.map(({ node }) => (
                <li
                  key={node.id}
                  css={css`
                    box-shadow: 0 2px 5px #cacaca;
                  `}
                >
                  <a
                    href={`https://www.instagram.com/p/${node.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Img
                      css={css``}
                      fluid={node.localFile.childImageSharp.fluid}
                    />
                  </a>
                </li>
              ));
            }}
          />
        </ul>
      </section>
    </aside>
  );
}

export default Aside;
