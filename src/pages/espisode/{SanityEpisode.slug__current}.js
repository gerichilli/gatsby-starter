import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";

export default function SanityEpisode({ data }) {
  const espisode = data.sanityEpisode;

  return (
    <Layout>
      <div className="c-container">
        <Link to="/espisode">Back</Link>
        <GatsbyImage image={espisode.guest[0].guestImage.asset.gatsbyImageData} alt={espisode.title} />
        <h1>{espisode.title || "No title"}</h1>
        <p>POSTED {espisode.date}</p>
        <p>{espisode.description || "No description"}</p>
        <ul>
          <li>
            <a href={`https://www.learnwithjason.dev/${espisode.slug.current}`}>Full espisode</a>
          </li>
          {espisode.youtubeID && (
            <li>
              <a href={`https://youtu.be/${espisode.youtubeID}`}>Watch on Youtube</a>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query EpisodeQuery($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
      guest {
        guestImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export function Head({
  data: {
    sanityEpisode: { title, description },
  },
}) {
  return <Seo title={title} description={description} />;
}
