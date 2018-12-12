import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
      render={site => {
        const { siteMetadata } = site;
        const { title, subtitle } = siteMetadata;
        return (
          <header>
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
