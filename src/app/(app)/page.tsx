import Container from "@/components/Container";
import PodcastCard from "@/components/PodcastCard";
import React from "react";

function page() {
  return (
    <Container>
      <div>
        <section>
          <h1 className="text-white text-2xl font-semibold">
            Trending Podcasts
          </h1>
          {/* Trending Podcasts cards section */}
          <div className="grid__card">
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
          </div>
        </section>
      </div>
    </Container>
  );
}

export default page;
