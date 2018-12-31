import React from "react";
import { css } from "@emotion/core";
import { Content } from "../layout";
import instaIcon from "../../assets/instagram.svg";

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  div,
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 620px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

function Footer({ maxWidth }) {
  return (
    <footer
      css={css`
        font-size: 0.9rem;
        padding: 1rem 0;
        color: #484848;
        background: white;
        background: linear-gradient(to right, white, white);
        border-top: 1px solid #e8e8e8;
      `}
    >
      <Content maxWidth={maxWidth}>
        <div css={container}>
          <div>
            Sigueme en
            <ul
              css={css`
                padding-inline-start: 0;
                list-style-type: none;
                margin-inline-start: 0;
                margin: 0;
                li {
                  margin: 0;
                }
                a {
                  margin-left: 5px;
                  box-shadow: none;
                }
                img {
                  width: 100%;
                  heigt: auto;
                  max-width: 18px;
                  margin: auto;
                  border-radius: 7px;
                }
              `}
            >
              <li>
                <a
                  href="https://www.instagram.com/hans.lebon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instaIcon} alt="instagram page" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            Claudia Flores
            <span style={{ color: "#b91d73", margin: "0 0.4rem" }}>|</span>
            Finanzas
          </div>
        </div>
      </Content>
    </footer>
  );
}

export default Footer;
