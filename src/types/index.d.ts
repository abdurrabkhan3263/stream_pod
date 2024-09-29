import { SetStateAction, Dispatch } from "react";
import { Id } from "../../convex/_generated/dataModel";

export interface GeneratorProps {
  voiceType: string;
  audio: string;
  thumbnail: string;
  podCastPrompt: string;
  thumbnailPrompt: string;
  setThumbnailPrompt: Dispatch<SetStateAction<string>>;
  setPodCastPrompt: Dispatch<SetStateAction<string>>;
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setThumbnailUrl: Dispatch<SetStateAction<string>>;
  setAudioUrl: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
  setThumbnailStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
}

export interface createPodCastType {
  voiceType: string;
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
  setPodCastPrompt: Dispatch<SetStateAction<string>>;
  audio: string;
  setAudio: Dispatch<SetStateAction<string>>;
  podcastPrompt: string;
}

export interface createThumbnailType {
  thumbnail: string;
  setThumbnail: Dispatch<SetStateAction<string>>;
  setThumbnailStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setThumbnailPrompt: Dispatch<SetStateAction<string>>;
  thumbnailPrompt: string;
}
