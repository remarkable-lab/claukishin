import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const container = css`
  min-height: 45px;
  padding: 3px 0;
  display: flex;
  background-color: gray;
  a {
    color: white;
  }
`;

const siteNav = css`
  width: 900px;
  margin: auto;
  padding: 3px 0;
  display: flex;
  justify-content: space-between;
  div,
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const linkBase = css`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: orange;
  }
`;

const navList = css`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
  }
  li:not(:last-child) {
    margin-right: 1em;
  }
`;

const selected = css`
  color: red !important;
  ${linkBase};
`;

const noSelected = css`
  ${linkBase};
`;

function Nav() {
  let { pathname } = window.location;
  pathname = pathname.trim();

  const rootPath = pathname === `${__PATH_PREFIX__}/`;
  return (
    <div
      css={css`
        ${container};
        ${!rootPath && `background-color: blue`};
      `}
    >
      <nav css={siteNav}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <ul css={navList}>
          <li>
            <Link
              to="/contacto"
              css={pathname === "/contacto" ? selected : noSelected}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/me" css={pathname === "/me" ? selected : noSelected}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Nav.defaultProp = {};

Nav.propTypes = {};

export default Nav;
