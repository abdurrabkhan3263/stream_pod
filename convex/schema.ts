import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // PodCast Schema

  podcast: defineTable({
    podcastTitle: v.string(),
    audioStorageId: v.optional(v.id("_storage")),
    user: v.id("users"),
    podcastDescription: v.string(),
    audioUrl: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    imageStorageId: v.optional(v.id("_storage")),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
    voicePrompt: v.string(),
    imagePrompt: v.string(),
    audioDuration: v.number(),
    views: v.number(),
    likeCount: v.number(),
  })
    .searchIndex("search_author", { searchField: "author" })
    .searchIndex("search_body", { searchField: "podcastDescription" })
    .searchIndex("search_title", { searchField: "podcastTitle" }),

  // User Schema

  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
    clerkId: v.string(),
  }),
});
