import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { createThumbnailType } from "@/types";

function GenerateThumbnail({
  thumbnail,
  setThumbnail,
  setThumbnailPrompt,
  setThumbnailStorageId,
  thumbnailPrompt,
}: createThumbnailType) {
  const [aiThumbnail, setAiThumbnail] = useState("");
  return (
    <>
      <label className="text-white text-base font-semibold">
        <p>AI prompt to generate thumbnail</p>
      </label>
      <Input
        className="bg-bgDark border-none mt-2.5 ring-offset-ringBorder text-white"
        placeholder="Write a prompt to generate custom thumbnail"
      />
      {aiThumbnail && (
        <div className="flex gap-2 flex-col justify-center items-center overflow-hidden w-80 h-48 mt-3 rounded-md bg-bgDark">
          <Image
            src={aiThumbnail}
            height={200}
            width={200}
            alt="thumbnail"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </>
  );
}

export default GenerateThumbnail;
