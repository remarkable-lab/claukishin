import React from "react";
import { css } from "@emotion/core";
import { Content } from "../layout";
import instaIcon from "../../assets/instagram.svg";

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
  @media (min-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

function Footer() {
  return (
    <footer
      css={css`
        background-color: white;
        border-top: 1px solid black;
      `}
    >
      <Content>
        <div css={container}>
          <div>
            Sigueme en
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/hans.lebon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px" }}
                >
                  <img
                    src={instaIcon}
                    alt="instagram page"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "18px",
                      margin: "auto",
                      borderRadius: "7px"
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            Claudia Flores
            <span style={{ color: "gray" }}>|</span>
            Finanzas
          </div>
        </div>
      </Content>
    </footer>
  );
}

export default Footer;
