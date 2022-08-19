import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <Layout>
      <div className="c-main">
        <div class="c-container">
          <h1>Index page</h1>
          <Link to="/espisode">Episode</Link>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;

//　ページのドキュメントヘッド
export function Head() {
  return <Seo title="Gastby Stater File" description="Gastby Stater File" />;
}
