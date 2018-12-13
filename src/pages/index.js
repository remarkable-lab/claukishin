import React from "react";
import { Link } from "gatsby";
import Layout, { Content } from "../components/layout";
import Header from "../components/Header";

export default () => (
  <Layout>
    <Header />
    <Content>
      <div>Index</div>
      <Link to="/contacto">Contacto</Link>
    </Content>
  </Layout>
);
