import React from "react";
import { navigate } from "gatsby";
import { css } from "@emotion/core";
import addToMailchimp from "gatsby-plugin-mailchimp";

class Signup extends React.Component {
  state = {
    email: "hanslgarcia@gmail.com",
    name: "Hans",
    lastName: "Lebon",
    error: false,
    msg: ""
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    try {
      const { email, name, lastName } = this.state;

      const { result, msg } = await addToMailchimp(email, {
        PATHNAME: this.props.pathname,
        FNAME: name,
        LNAME: lastName
      });
      console.log(result);
      if (result === "error") {
        this.setState({
          error: true,
          msg: msg.split("<")[0]
        });
      } else {
        navigate(`/confirm`, { state: { name } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props.pathname);
    const { name, lastName, email } = this.state;
    return (
      <form
        onSubmit={this.handleOnSubmit}
        noValidate
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
            <h3 style={{ margin: 0, marginBottom: "1rem" }}>
              Unete para estar en lo último
            </h3>
            <p style={{ marginTop: "5px" }}>
              Suscribete para recibir mi contenido por email y no te pierdas
              ninguno de mis artículos
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
              name="name"
              value={name}
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              placeholder="Apellido"
              name="lastName"
              value={lastName}
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleOnChange}
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
