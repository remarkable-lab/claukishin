import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";

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
          <header
            css={css`
              background-color: blue;
              height: 100%;
            `}
          >
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
