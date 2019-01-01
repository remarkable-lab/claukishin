import React from "react";
import { css } from "@emotion/core";
import { renderStylesToNodeStream } from "emotion-server";

const host = `https://us7.api.mailchimp.com`;
const listId = `fbb89f01e9`;
const api = `${host}/3.0/lists/${listId}/members/`;

class Signup extends React.Component {
  state = {
    email_address: "urist.mcvankab@freddiesjokes.com",
    status: "subscribed",
    FNAME: "Urist",
    LNAME: ""
  };

  _onChange = e => {
    const { name, value } = e.target;
    console.log(e.target);
    this.setState({
      [name]: value
    });
  };

  _onSubmit = event => {
    event.preventDefault();
    const { email_address, FNAME, LNAME } = this.state;
    const objJson = {
      email_address,
      status,
      merge_fields: {
        FNAME,
        LNAME
      }
    };
    fetch(
      "https://hanslebon.us7.list-manage.com/subscribe/post-json?u=087fd9c746a82ae9dfa71b0df&amp;id=fbb89f01e9",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify(objJson) 
      }
    )
      .then(response => {
        console.log(response);
        alert(`success`);
        return response;
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // https://hanslebon.us7.list-manage.com/subscribe/post?u=087fd9c746a82ae9dfa71b0df&amp;id=fbb89f01e9"

  render() {
    const { FNAME, email_address: email } = this.state;
    return (
      <form
        onSubmit={this._onSubmit}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 30px 40px;
            border: 1px solid #e4e3e3;
            transition: box-shadow 100ms ease-in-out;
            @media (min-width: 620px) {
              flex-direction: row;
              justify-content: space-between;
              div:nth-of-type(1) {
                width: 45%;
                margin: auto;
                padding: 20px;
              }
              div:nth-of-type(2) {
                width: 55%;
                padding: 20px;
              }
            }
            &:hover {
              box-shadow: 1px 2px 10px #e4e3e3;
              transition: box-shadow 100ms ease-in-out;
            }
          `}
        >
          <div id="newsletter">
            <h3>Unete a mi newsletter</h3>
            <p>
              Suscribete para recibir mi contenido por email y no te pierdas
              ninguno de mis articulos
            </p>
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
            <input
              type="text"
              placeholder="Nombre"
              value={FNAME}
              name="FNAME"
              onChange={this._onChange}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              name="email_address"
              onChange={this._onChange}
            />
            <button
              type="submit"
              css={css`
                width: 100%;
                max-width: 120px;
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
}

export default Signup;
