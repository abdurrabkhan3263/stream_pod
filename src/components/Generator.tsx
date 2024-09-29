import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import GeneratePodCast from "./GeneratePodCast";
import GenerateThumbnail from "./GenerateThumbnail";
import { GeneratorProps } from "@/types";

function Generator(props: GeneratorProps) {
  return (
    <div>
      <GeneratePodCast
        voiceType={props.voiceType}
        setAudioStorageId={props.setAudioStorageId}
        setAudioDuration={props.setAudioDuration}
        setPodCastPrompt={props.setPodCastPrompt}
        audio={props.audio}
        setAudio={props.setAudioUrl}
        podcastPrompt={props.podCastPrompt}
      />
      <Tabs
        defaultValue="account"
        style={{
          marginTop: "calc(2rem * calc(1 - var(--tw-space-y-reverse)))",
        }}
      >
        <TabsList className="bg-bgDark w-full xl:w-1/2 border border-darkBrown px-3 h-[58px] rounded-lg">
          <TabsTrigger
            value="account"
            className="w-1/2 text-base data-[state=active]:bg-activeBtn py-2.5 text-white data-[state=active]:text-white font-semibold"
          >
            AI prompt to generate thumbnail
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="w-1/2 text-base data-[state=active]:bg-activeBtn py-2.5 text-white data-[state=active]:text-white font-semibold"
          >
            Upload custom image
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <GenerateThumbnail
            thumbnail={props.thumbnail}
            setThumbnail={props.setThumbnailUrl}
            setThumbnailStorageId={props.setThumbnailStorageId}
            setThumbnailPrompt={props.setThumbnailPrompt}
            thumbnailPrompt={props.thumbnailPrompt}
          />
        </TabsContent>
        <TabsContent value="password">
          <div className="flex gap-2 flex-col justify-center items-center w-full h-44 mt-3 rounded-md border border-dashed border-darkBrown bg-bgDark">
            <Image
              src="/icons/upload-image.svg"
              height={40}
              width={40}
              alt="upload"
            />
            <div></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Generator;
