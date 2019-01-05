import React from "react";
// import { graphql } from "gatsby";
import Layout, { Content } from "../components/layout";

function Confirm(props) {
  console.log(props);
  const { location } = props;
  // const siteTitle = get(this.props, "data.site.siteMetadata.title");
  return (
    <Layout location={location}>
      <Content>
        <div style={{ marginTop: "2rem" }}>
          <h1>Solo un paso más...</h1>
          <p>
            Gracias por suscribirte. Debes verificar tu correo y confirmar tu
            suscripción.
          </p>
        </div>
      </Content>
    </Layout>
  );
}

// export const pageQuery = graphql`
//   query ConfirmSiteData {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default Confirm;
