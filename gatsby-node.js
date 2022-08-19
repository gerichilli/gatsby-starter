const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                id
                slug
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panic("error loading content", result.errors);
    return;
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug ? node.fields.slug : "/",
      component: path.resolve("./src/components/DocsLayout.js"),
      context: {
        id: node.fields.id,
        slug: node.fields.slug,
      },
      defer: true,
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    const title = node.frontmatter.title || "";

    let value = node.frontmatter.slug;
    if (!value && parent.relativePath) {
      value = parent.relativePath.replace(parent.ext, "");
    }

    if (!value) {
      reporter.panic(
        `Can not create node with title: ${title} there is no relative path or frontmatter to set the "slug" field`
      );
      return;
    }

    if (value === "index") {
      value = "";
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`,
    });

    createNodeField({
      name: "id",
      node,
      value: node.id,
    });

    createNodeField({
      name: "title",
      node,
      value: title,
    });
  }
};
