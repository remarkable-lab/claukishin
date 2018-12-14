import React from "react";
import { Link } from "gatsby";
import Layout, { Content } from "../../components/layout";

export default () => (
  <Layout>
    <Content>
      <div>Blog index</div>
      <Link to="/">Casa</Link>
    </Content>
  </Layout>
);