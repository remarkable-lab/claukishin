import React from "react";
import { css } from "@emotion/core";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/app.css";
import "../styles/reboot.css";

export default function Layout(props) {
  const { children } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <div>
          <Nav />
          {children}
        </div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <Footer />
      </div>
    </div>
  );
}

export const Content = ({ children }) => (
  <div>
    <div
      css={css`
        max-width: 900px;
        margin: auto;
        background-color: #b7b3b3;
      `}
    >
      {children}
    </div>
  </div>
);
