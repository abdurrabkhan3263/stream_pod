import { mutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createPodcast = mutation({
  args: {
    podcastTitle: v.string(),
    audioStorageId: v.id("_storage"),
    podcastDescription: v.string(),
    audioUrl: v.string(),
    imageUrl: v.string(),
    imageStorageId: v.id("_storage"),
    authorImageUrl: v.string(),
    voicePrompt: v.string(),
    imagePrompt: v.string(),
    audioDuration: v.number(),
    views: v.number(),
    likeCount: v.number(),
  },
  handler: async (ctx, args) => {
    const creator = await ctx.auth.getUserIdentity();

    if (!creator) {
      throw new ConvexError("User not authenticated");
    }

    const isUser = await ctx.db
      .query("users")
      .filter((user) => user.eq(user.field("email"), creator.email))
      .collect();

    if (isUser.length === 0) {
      throw new ConvexError("User not found");
    }

    return ctx.db.insert("podcast", {
      podcastTitle: args.podcastTitle,
      audioStorageId: args.audioStorageId,
      user: isUser[0]._id,
      podcastDescription: args.podcastDescription,
      audioUrl: args.audioUrl,
      imageUrl: args.imageUrl,
      imageStorageId: args.imageStorageId,
      author: isUser[0].name,
      authorId: isUser[0].clerkId,
      authorImageUrl: isUser[0].imageUrl,
      voicePrompt: args.voicePrompt,
      imagePrompt: args.imagePrompt,
      audioDuration: args.audioDuration,
      views: args.views,
      likeCount: args.likeCount,
    });
  },
});
