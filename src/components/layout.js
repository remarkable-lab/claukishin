import React from "react";
import "../styles/app.css";
import "../styles/reboot.css";

function Layout(props){
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={{ flex: "1 0 auto" }}>
                <div>
                    <nav>nav</nav>
                    {props.children}
                </div>
            </div>
            <div style={{ flexShrink: 0 }}>
                <h6>Footer</h6>
            </div>
      </div>
    )
}

export default Layout;