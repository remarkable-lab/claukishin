import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import Layout, { Content } from "../components/layout";
import Header from "../components/Header";

export default () => (
  <Layout>
    <Header />
    <Content>
      <main
        css={css`
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          section,
          aside {
            width: 100%;
          }
          @media (min-width: 700px) {
            section {
              width: 70%;
            }
            aside {
              width: 30%;
            }
          }
        `}
      >
        <section>
          <header>
            <h3>Blog posts</h3>
          </header>
          <ul>
            <li>
              <article>Post 1</article>
            </li>
            <li>
              <article>Post 2</article>
            </li>
            <li>
              <article>Post 3</article>
            </li>
          </ul>
        </section>
        <aside>
          <section>
            <header>
              <h3>Aside</h3>
            </header>
          </section>
        </aside>
      </main>
      <Link to="/contacto">Contacto</Link>
    </Content>
  </Layout>
);
