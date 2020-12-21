import React, { useState, useEffect } from "react";

import axios from "axios";

import Arrow from "../../common/img/arrowLong.svg";
import "./InstaFeed.css";

function InstaFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    console.log(`attempted instagram feed on landing page!`);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get("https://www.instagram.com/maynoothfurnituresite/?__a=1", config)
      .then((res) => {
        console.log(res.data);

        const edges = res.data.graphql.user.edge_owner_to_timeline_media.edges;

        console.log(edges);

        let fetchedPosts = [];

        for (let index = 0; index < 6; index++) {
          const element = {
            link: `https://www.instagram.com/maynoothfurnituresite/p/${edges[index].node.shortcode}/`,
            src: edges[index].node.thumbnail_resources[3].src,
          };
          fetchedPosts.push(element);
        }

        console.log(fetchedPosts);
        setPosts(fetchedPosts);
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  }, []);

  return (
    <div className="content-wrapper feed-wrapper">
      <h3 className="credentials-heading">Your dose of inspiration</h3>
      {posts !== null ? (
        <div className="feed-grid">
          {posts.map((element, index) => {
            if (window.innerWidth > 750 || index < 4) {
              console.log(index);
              return (
                <div
                  key={index}
                  className="feed-pic"
                  style={{ backgroundImage: `url(${element.src})` }}
                  onClick={() => window.open(element.link, "_blank")}
                ></div>
              );
            } else return "";
          })}
        </div>
      ) : (
        <h4>"Instagram feed is loading"</h4>
      )}

      <h5
        className="feed-action"
        onClick={() =>
          window.open(
            "https://www.instagram.com/maynoothfurnituresite/",
            "_blank"
          )
        }
      >
        Follow us on instagram for more <Arrow className="arrow-long" />
      </h5>
    </div>
  );
}

export default InstaFeed;
