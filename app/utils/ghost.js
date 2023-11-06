// ghost-client.ts

import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: "v5.0",
});

export async function getSingleBlog(postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },

      {
        include: ["tags", "count.posts"],
      }
    )
    .catch((err) => {
      console.error(err);
    });
}

export async function getBlogs() {
  return await api.posts
    .browse({
      fields: "slug,title,excerpt,feature_image,feature_image_caption,created_at",
      include: ["tags"],
      limit: 10,
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export async function getSitemapBlogs() {
  return await api.posts
    .browse({
      fields: "slug,updated_at",
      limit: 10,
    })
    .catch((err) => {
      throw new Error(err);
    });
}
