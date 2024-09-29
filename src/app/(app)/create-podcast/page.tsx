"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { podCastType } from "@/types/zod.podcast";
import { useForm } from "react-hook-form";
import Container from "@/components/Container";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Generator from "@/components/Generator";
import { Button } from "@/components/ui/button";
import { Id } from "../../../../convex/_generated/dataModel";

const voiceCategories = ["alloy", "shimmer", "nova", "echo", "fable", "onyx"];

function Page() {
  // Audio State
  const [audioUrl, setAudioUrl] = useState("");
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null
  );
  const [audioDuration, setAudioDuration] = useState(0);

  // All Prompts
  const [voiceType, setVoiceType] = useState("");
  const [podcastPrompt, setPodcastPrompt] = useState("");
  const [thumbnailPrompt, setThumbnailPrompt] = useState("");

  // Thumbnail State
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailStroageId, setThumbnailStorageId] =
    useState<Id<"_storage"> | null>(null);

  const [isSubmiting, setIsSubmiting] = useState(false);

  const form = useForm<z.infer<typeof podCastType>>({
    resolver: zodResolver(podCastType),
    defaultValues: {
      podCastTitle: "",
      podcastDescription: "",
    },
  });
  const onSubmit = form.handleSubmit((data: z.infer<typeof podCastType>) => {
    console.log(data);
  });

  return (
    <Container>
      <h1 className="text-white text-2xl font-semibold">Create Podcast</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-8">
          <FormField
            control={form.control}
            name="podCastTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-semibold">
                  <p className="pt-9">Podcast Title</p>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your podcast title"
                    className="bg-bgDark border-none ring-offset-ringBorder text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Select */}

          <div className="flex flex-col gap-2.5">
            <label>
              <p className="text-white text-base font-semibold">
                Select AI Voice
              </p>
            </label>
            <Select onValueChange={(value) => setVoiceType(value)}>
              <SelectTrigger className="w-full bg-bgDark text-dark border-none ring-offset-ringBorder">
                <SelectValue placeholder="Select Voice" className="text-dark" />
              </SelectTrigger>
              <SelectContent className="bg-bgDark border-none text-dark">
                {voiceCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}

          <FormField
            control={form.control}
            name="podcastDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-semibold">
                  <p>Description</p>
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-bgDark border-none ring-offset-ringBorder text-white"
                    placeholder="Write a short description about the podcast"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className="bg-darkBrown h-0.5" />

          {/* Generator Podcast Component */}
          <Generator
            voiceType={voiceType}
            audio={audioUrl}
            thumbnail={thumbnailUrl}
            podCastPrompt={podcastPrompt}
            thumbnailPrompt={thumbnailPrompt}
            setAudioUrl={setAudioUrl}
            setThumbnailPrompt={setThumbnailPrompt}
            setPodCastPrompt={setPodcastPrompt}
            setAudioStorageId={setAudioStorageId}
            setThumbnailUrl={setThumbnailUrl}
            setAudioDuration={setAudioDuration}
            setThumbnailStorageId={setThumbnailStorageId}
          />

          <Button variant={"uploadPodcast"}>Submit & publish podcast</Button>
        </form>
      </Form>
    </Container>
  );
}

export default Page;
