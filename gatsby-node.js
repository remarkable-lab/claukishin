const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                title
                date
                tags
                public
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      posts.forEach(({ node }, index) => {
        if (node.frontmatter.public) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: {
              slug: node.fields.slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index < posts.length - 1 ? posts[index + 1].node : null
            }
          });
        }
      });
      resolve();
    });
  });
};
