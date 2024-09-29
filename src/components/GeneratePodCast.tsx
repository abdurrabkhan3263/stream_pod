import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { createPodCastType } from "@/types";

const useGeneratePodcast = (props: createPodCastType) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePodcast = async () => {};
  return { isGenerating, generatePodcast };
};

function GeneratePodCast(props: createPodCastType) {
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);
  return (
    <>
      <label className="text-white text-base font-semibold">
        <p>AI prompt to generate podcast</p>
      </label>
      <Textarea
        className="bg-bgDark border-none mt-2.5 ring-offset-ringBorder text-white min-h-32"
        placeholder="Provide text to AI to generate audio"
        value={props.podcastPrompt}
        onChange={(e) => props.setPodCastPrompt(e.target.value)}
      />
      {props.podcastPrompt.length > 10 && (
        <Button variant={"generatePodcast"} type="button">
          Generate Podcast
        </Button>
      )}
    </>
  );
}

export default GeneratePodCast;
