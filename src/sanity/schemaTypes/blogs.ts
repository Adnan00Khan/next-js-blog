export const Blogs = {
  name: "blogs",
  type: "document",
  title: "Blogs",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "sd",
      type: "string",
      title: "Short description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "ld",
      type: "string",
      title: "Detail description",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title", // Automatically generates a slug from the title
      },
    },
  ],
};
