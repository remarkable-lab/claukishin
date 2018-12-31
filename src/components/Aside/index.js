import React from "react";
import { css } from "@emotion/core";
import Bio from "../Bio";
import Instagram from "../Instagram";

function Aside() {
  return (
    <aside
      css={css`
        padding: 1em;
        border: 1px dashed #c641c9;
        background-color: white;
        transition: all 0.2s ease-in-out;
        &:hover {
          box-shadow: 0 5px 12px #dedede;
          transform: scale(1.01);
          transition: all 0.2s ease-in-out;
        }
        section {
          width: 100%;
        }
      `}
    >
      <Bio />
      <Instagram />
    </aside>
  );
}

export default Aside;
