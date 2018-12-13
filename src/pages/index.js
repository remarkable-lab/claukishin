import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/Header";

export default () => (
  <Layout>
    <Header />
    <div>Index</div>
    <Link to="/contacto">Contacto</Link>
  </Layout>
);
