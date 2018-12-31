import React from "react";
import { css } from "@emotion/core";

import "./style.css";

const host = `https://us7.api.mailchimp.com`;
const listId = `fbb89f01e9`;
const api = `${host}/3.0/lists/${listId}/members/`;

function Signup() {
  return (
    <form>
      <div>
        <div id="newsletter">
          <h3>Join the news letter</h3>
          <p>Subscribe to ge my latest content by email</p>
        </div>
        <div
          id="form"
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            input {
              margin-bottom: 10px;
              padding: 8px;
              border: 1px solid #d4d4d4;
              border-radius: 5px;
            }
          `}
        >
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Email" />
          <button
            type="submit"
            css={css`
              max-width: 100px;
              border: 1px solid #9d40ab;
              padding: 9px 7px;
              border-radius: 7px;
              background-color: #c441c8;
              color: white;
              cursor: pointer;
              &:hover {
                background-color: #9c3faa;
              }
            `}
          >
            Suscribirse
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
