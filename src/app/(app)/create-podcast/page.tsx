"use client";

import React from "react";
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

const voiceCategories = ["alloy", "shimmer", "nova", "echo", "fable", "onyx"];

function Page() {
  const [audioType, setAudioType] = React.useState("");
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <Select onValueChange={(value) => setAudioType(value)}>
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
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Container>
  );
}

export default Page;
