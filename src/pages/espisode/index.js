import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";

function EpisodeListPage({ data }) {
  const espisodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
      <div className="c-main">
        <div class="c-container">
          <h1>Episodes List</h1>
          <ul>
            {espisodes.map((espisode) => (
              <li key={espisode.id}>
                <Link to={espisode.gatsbyPath}>
                  {espisode.title} (with {espisode.guest?.[0]?.name})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default EpisodeListPage;

export const query = graphql`
  query allEpisodeQuery {
    allSanityEpisode(sort: { fields: date, order: DESC }, filter: { youtubeID: { ne: "null" } }, limit: 20) {
      nodes {
        id
        title
        guest {
          name
        }
        gatsbyPath(filePath: "/espisode/{SanityEpisode.slug__current}")
      }
    }
  }
`;

//　ページのドキュメントヘッド
export function Head() {
  return <Seo title="Test Sanity" description="Test Sanity" />;
}
