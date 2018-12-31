import { css } from "@emotion/core";

export const list = css`
  width: 100%;
  display: flex;
  flex: wrap;
  flex-wrap: wrap;
  padding-inline-start: 0;
  list-style-type: none;
  margin-inline-start: 0;
  li {
    width: calc((100% / 3) - 7.5px);
    min-width: 50px;
    margin-bottom: 5px;
  }
  li:nth-child(3n) {
    margin: 0 5px 5px;
  }
  li:nth-child(1n) {
    margin-left: 5px;
  }
`;

export const listItem = css`
  box-shadow: 0 1px 4px #cacaca;
  transition: transform 300ms;
  &:hover {
    box-shadow: 0 2px 8px #cacaca;
    transform: scale(1.06);
    transition: transform 300ms;
  }
`;
