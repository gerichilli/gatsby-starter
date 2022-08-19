import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Layout from "./Layout";
import Seo from "./Seo";

function DocsLayout({
  data: {
    mdx: {
      frontmatter: { title },
      body,
    },
  },
}) {
  return (
    <>
      <Layout>
        <h1>{title}</h1>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </>
  );
}

export default DocsLayout;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      body
    }
  }
`;

//　ページのドキュメントヘッド
export function Head({
  data: {
    mdx: {
      frontmatter: { title, description },
    },
  },
}) {
  return <Seo title={title} description={description} />;
}
