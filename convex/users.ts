import { ConvexError, v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const getTrendingPodcast = query({
  args: {},
  async handler(ctx) {
    const allUsers = await ctx.db.query("users").collect();

    const userData = await Promise.all(
      allUsers.map(async (user) => {
        const authorPodcast = await ctx.db
          .query("podcast")
          .filter((p) => p.eq(p.field("authorId"), user.clerkId))
          .collect();

        const sortedPodcast = authorPodcast.sort((a, b) => (b.views = a.views));

        return {
          ...user,
          total_podcast: authorPodcast.length,
          podcast: sortedPodcast.map((value) => ({
            podcasttitle: value.podcastTitle,
            podcastId: value._id,
          })),
        };
      })
    );

    const sortedUsers = userData.sort(
      (a, b) => b.total_podcast - a.total_podcast
    );

    return sortedUsers;
  },
});

export const getUserById = query({
  args: {
    id: v.string(),
  },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((user) => user.eq(user.field("clerkId"), args.id))
      .unique();

    if (!user) {
      throw new ConvexError("User is not found");
    }
    return user;
  },
});

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      imageUrl: args.imageUrl,
      name: args.name,
    });
  },
});

export const updateUser = internalMutation({
  args: {
    clerkId: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((e) => e.eq(e.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User is not found");
    }

    await ctx.db.patch(user._id, {
      imageUrl: args.imageUrl,
      email: args.email,
    });

    const podcast = await ctx.db
      .query("podcast")
      .filter((podCast) => podCast.eq(podCast.field("authorId"), user.clerkId))
      .collect();

    await Promise.all(
      podcast.map(async (podCastData) => {
        return await ctx.db.patch(podCastData._id, {
          authorImageUrl: args.imageUrl,
        });
      })
    );
  },
});

export const deleteUser = internalMutation({
  args: {
    id: v.string(),
  },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((user) => user.eq(user.field("clerkId"), args.id))
      .unique();

    if (!user) {
      throw new ConvexError("User is not find");
    }

    await ctx.db.delete(user._id);

    // const allPodCast = await ctx.db
    //   .query("podcast")
    //   .filter((podcast) => podcast.eq(podcast.field("authorId"), user.clerkId))
    //   .collect();

    // Promise.all(
    //   allPodCast.map(async (p) => {
    //     return await ctx.db.delete(p._id);
    //   })
    // );
  },
});
