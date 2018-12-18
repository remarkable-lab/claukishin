import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";

const heroStyle = css`
  width: 100%;
  padding: 8rem 1rem 5rem 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  background: linear-gradient(to right, #f953c6, #b91d73);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: white;
  height: 40%;
  opacity: 1;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }
`;

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              subtitle
            }
          }
        }
      `}
      render={({ site }) => {
        const { title, subtitle } = site.siteMetadata;
        return (
          <header css={heroStyle}>
            <div>
              <div>
                <div>
                  <h1>{title}</h1>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          </header>
        );
      }}
    />
  );
}

export default Header;
