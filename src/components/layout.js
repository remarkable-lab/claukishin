import React from "react";
import { css } from "@emotion/core";
import { Location } from "@reach/router";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/app.css";
import "../styles/reboot.css";

export default function Layout(props) {
  const { children } = props;
  return (
    <Location>
      {({ location }) => (
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <div style={{ flex: "1 0 auto" }}>
            <div>
              <Nav location={location} />
              {children}
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <Footer />
          </div>
        </div>
      )}
    </Location>
  );
}

export const Content = ({ children }) => (
  <div>
    <div
      css={css`
        max-width: 1000px;
        margin: auto;
        background-color: white;
      `}
    >
      {children}
    </div>
  </div>
);
