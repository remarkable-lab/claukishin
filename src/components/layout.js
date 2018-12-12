import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/app.css";
import "../styles/reboot.css";

function Layout(props) {
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

export default Layout;
