import React from "react";
// import { graphql } from "gatsby";
import Layout, { Content } from "../components/layout";

function Thanks({ location }) {
  return (
    <Layout location={location}>
      <Content>
        <div style={{ marginTop: "2rem" }}>
          <h1>Gracias por suscribirte</h1>
          <p>
            Ahora que ha sido confirmado recibiras correos cuando publique un
            nuevo articulo.
          </p>
        </div>
      </Content>
    </Layout>
  );
}

// export const pageQuery = graphql`
//   query ThanksSiteData {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default Thanks;
