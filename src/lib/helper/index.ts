export const generateBlogSlug = (title: string, id: string | number) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .concat(`-${id}`);
};

export const getIdFromBlogSlug = (slug: string) => {
  return slug.split("-")[slug.split("-").length - 1];
};
