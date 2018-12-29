import React from "react";
import { Link } from "gatsby";
import Layout, { Content } from "../components/layout";

export default ({ location }) => (
  <Layout location={location}>
    <Content>
      <div>Error 404</div>
      <Link to="/">Ir a Inicio</Link>
    </Content>
  </Layout>
);
