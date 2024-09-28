"use client";

import Container from "@/components/Container";
import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import React from "react";

function Home() {
  return (
    <Container>
      <div>
        <section>
          <h1 className="text-white text-2xl font-semibold">
            Trending Podcasts
          </h1>
          {/* Trending Podcasts cards section */}
          <div className="grid__card">
            {podcastData.map(({ id, title, description, imgURL }) => (
              <PodcastCard
                key={id}
                imgURL={imgURL}
                title={title}
                description={description}
                id={id}
              />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

export default Home;
